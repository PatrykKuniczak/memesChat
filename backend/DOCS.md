Endpoints and a little explanation:

global prefix: ```\api```

```
    Interfaces: 
        User:
        {@Length(10, 50)
        username: string;
    
        @Length(10, 80)
        password: string}

```

```
LOOK INTERFACES SECTION FOR KNOW WHAT'S TYPE OF OBJECTS EACH ENPOINT RETURN

\auth:
    POST \register and \login:
        payload (User):
        username: string

    	password: string}
    	
    Both can return UnauthorizeException, execptions about validation.    
    
    And login can return 'duplicated user'
    
    On valid habit both endpoints return object {accessToken: JWT token}.
    
FOR ALL REST ENPOINTS JWT TOKEN MUST BE SEND IN HEADERS.Authorization

\user
    GET \:id
        Return Promise with null or User object
```