Endpoints and a little explanation:

global prefix: ```\api```

```
\auth:
    \register and \login:
        payload:
        {Length = From 10 to 50
        username: string

        Min Length = 10
    	password: string}
    	
    Both can return UnauthorizeException, execptions about validation.    
    
    And login can return 'duplicated user'
    
    On normal habit both endpoints return JWT token.
```