Endpoints and a little explanation:

global prefix: ```\api```

```
    Interfaces:
     
    JWT token:
    
        Length could be from 5 to 30
        Must be alphanumeric
        username: string
        
        id: number
        
        Identifies the time at which the JWT was issued
        iat: number
       
        Identifies the expiration time 
        exp: number
      
      
        ****
      
        
        User:
        
        Automatic generated
        id: number
        
        Length could be from 5 to 30
        Must be alphanumeric
        username: string
    
        Length could be from 10 to 60
        Must cointain 1 small, 1 big letter and 1 special sign
        Regex: /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ - Use it for validate
        password: string
```

```
LOOK INTERFACES SECTION FOR KNOW WHAT'S TYPE OF OBJECTS EACH ENPOINT RETURN.
IF JWT TOKEN IS INVALID Unauthorize (401) ERROR OCCUR 
and ep. when one user try to select data from other user.

\auth:
    POST \register and \login:
        payload (part of User):
        username: string

    	password: string}
    	
    
    And login can return Conflict (409) with message 'duplicated user'
    
    On valid habit both endpoints return object {accessToken: JWT token}.
    
FOR ALL REST ENPOINTS JWT TOKEN MUST BE SEND IN HEADERS.Authorization

\user
    GET \
        Return Array with all users.
         
    GET \:id
        Return User object without password or Not Found(404) ERROR.         
        
    DELETE \:id
        Return true or Not Found(404) ERROR.
       
   PUT \:id
   Payload inside body: {User without password and id}
         Return true, null(When data didn't change), Not Found(404) ERROR 
         or Conflict (409) when username is duplicated or Bad Request (400).
}
```