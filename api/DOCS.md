### __global prefix__: ```\api```

## API Endpoints:

    run backend: npm run start:dev
    open localhost(or other):YOUR_PORT/docs for default "localhost:3030/docs"

    For get avatar hit this url:
        For default host and port: "http://localhost:3030/avatars/${sourcePath}"
        'sourcePath' u can take from User object(Look on swagger schemas). 
    
    Run 'npm run documentation:serve' and look an 'http://127.0.0.1:8080' (this will be show in the console after run)
    for whole backend documentation (structure and etc.)

##### IF TOKEN IS INVALID API RETURN Unauthorized(401),

##### BUT IF TOKEN IS EXPIRED THEN RETURN NOT FOUND(404) FOR ALL COVERAGE ENDPOINTS.