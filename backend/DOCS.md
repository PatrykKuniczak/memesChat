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
        payload:
        username: string

    	password: string}
    	
    Both can return UnauthorizeException, execptions about validation.    
    
    And login can return 'duplicated user'
    
    On normal habit both endpoints return JWT token.
    
FOR ALL REST ENPOINTS U MUST SEND A JWT TOKEN IN HEADERS.Authorization

\user
    GET \:id
        Return Promise with null or User object
```