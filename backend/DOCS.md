### __global prefix__: ```\api```

### Message:

// THAT WILL BE MIGRATED TO SWAGGER IN THE FUTURE

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

## API Endpoints:

    run backend: npm run start:dev
    open localhost(or other your host):YOUR PORT/docs for default "localhost:3030/docs"
    
    And here u have all endpoints, can be tested like in postman, remember to save Bearer token in "Authorize" hint
    
    Endpoints with "padlock" icon, require BearerAuth

    All schemas from backend, are located at the bottom of the page

##### IF TOKEN IS INVALID API RETURN Unauthorized(401).

## Web Socket:

// THAT WILL BE MIGRATED TO WS APP IN THE FUTURE

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
