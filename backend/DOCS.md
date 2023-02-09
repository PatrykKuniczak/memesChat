### __global prefix__: ```\api```

# **Interfaces:**

### JWT token:

```
Length could be from 5 to 30
Must be alphanumeric
username: string

id: number

Identifies the time at which the JWT was issued
iat: number

Identifies the expiration time
exp: number
```

### User:

```
Automatic generated
id: number

Length could be from 5 to 30
Must be alphanumeric (Can't contain polish letters)
username: string

Length could be from 10 to 60
(Must cointain 1 small and 1 big letter, 1 number and 1 special sign)
Can contain polish letters.

Regex: /^(?=.*[a-zżźćńółęąś])(?=.*[A-ZŻŹĆĄŚĘŁÓŃ])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\d!@#$%^&* ]*$/
password: string

avatar: Avatar

message: Message[]
```     

### Message:

```
Automatic generated
id: number

Length from 1 to 500 
content: string

isMeme: bool

Automatic generated
createdAt: number

Automatic generated
updatedAt: number

authorId: number
```

### Avatar:

```
Automatic generated
id: number

Must contain regex: #FOR CREATE#
source: string
```

## API Endpoints:

##### IF TOKEN IS INVALID API RETURN Unauthorized(401).

```
\auth:
    POST \register:
    payload: {username, password} Part of User
        Return {accessToken: JWT token} or Conflict (409) with message 'duplicated user'.
        
    POST \login:
    payload: {username, password} Part of User
        Return {accessToken: JWT token} or 404. 
```

#### FOR ALL REST ENDPOINTS JWT TOKEN NEED TO BE SEND IN HEADERS.Authorization

```
\users
    GET \
        Return Array with all users.
         
    GET \:id
        Return User object without password or 404.         
        
    DELETE \:id
        Return 200 or 404.
       
    PATCH \:id
    Payload body: {username, avatar}
        Return 200 or 404,
        Conflict (409) when username is duplicated or Bad Request (400).
```

```
\messages
    GET \
        Return Array with all messages.
        
    DELETE \:id
        Return 200 or 404.
        
    POST \
        Return Messsage object. 
        
    PUT \:id
    Payload body: {Message}
        Return 200 or 404.
```

## Web Socket:

```
emit -> "findAllMessages"
listen to: "foundMessages", Return the same as: \message GET \

emit -> "createMessage" with payload: Message
listen to: "createdMessage", Return the same as: \message POST \

emit -> "deleteMessage" with payload: {id}
listen to: "deletedMessage", Return the same as: \message DELETE \:id

emit -> "editMessage" with payload: Message
listen to: "editedMessage", Return the same as: \message PUT \:id

emit -> "typing" with payload: {isTyping: boolean}
listen to: "typing" Return {isTyping: boolean}
```