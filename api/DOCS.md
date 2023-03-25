### __global prefix__: ```\api```

## API Endpoints:

    FOR OPEN SWAGGER:
        1. RUN API 'npm run start:dev'
        2. OPEN 'http://localhost:3030/docs' FOR DEFAULT, OR YOUR HOST AND PORT FROM ENV
        
        HERE YOU CAN SEE DTO'S AND CREATE REQUESTS LIKE IN POSTMAN/INSOMNIA

---

    FOR OPEN COMPODOCS:
        1. RUN 'npm run documentation:serve'
        2. OPEN 'http://127.0.0.1:5010' (THIS WILL BE SHOWN IN THE CONSOLE AFTER RUN SCRIPT)

        IF YOU WANT OTHER PORT U MUST GO TO PACKAGE.JSON AND CHANGE VALUE IN "--port" in script from point '1.'
   
        HERE YOU CAN SEE MORE EXPLANATION ABOUT BACKEND STRUCTURE AND ETC.

---

##### IF TOKEN IS INVALID OR EXPIRED THE API RETURN Unauthorized(401),