# EVENTS ENDPOINTS:

#### emit - it's this what you must emit to server

#### listen to - it's this what you must listen to on client

##### THE DATA WHICH BE RETURNED IS THE SAME AS API (FOR THAT INFO GO TO API DOCS (SWAGGER)), /EXCEPT THAT WHICH HAVE SPECIFIC INFORMATION HERE

```
Namespaces:
    /messages
        emit -> "create" with payload: {content: string, isImage: boolean}
        listen to: "created", Return the created Message object
        
        emit -> "delete" with payload: {id: number}
        listen to: "deleted", Return { id: number, statusCode: number }
        
        emit -> "edit" with payload: {id: number, content: string}
        listen to: "edited", Return { id: number, statusCode: number }
        
        emit -> 'findOne' with payload: {id: number}
        listen to: 'foundOne' Return Message object
             
    /users
        emitting automatically on connection and disconnecttion
        listen to: "onlineUsersAmount" Return {onlineUsersAmount: number}
        
        emit -> 'findOne' with payload: {id: number}
        listen to: 'foundOne' Return User object
        
        emit -> "typing" with payload: {isTyping: boolean, username: string}
        listen to: "typing" Return payload
        
        (REMEMBER TO CREATE E.G. 2 SECONDS DELAY BETWEEN CHANGE ISTYPING STATE, FOR BETTER UX)
        
For both:
    listen to: "exception" for recive exception which can be thrown on each event above
    
    Exception object structure:
    {
        "statusCode": number,
        "message": string | string[]
        "error": string 
    }
```

### REMEMBER TO LISTEN ON ALL CLIENTS FOR EVERYTHING ALL TIME, AND WHEN SERVER EMIT SOMETHING THEN HIT "findOne" WITH ID FROM THAT EMITTED EVENT.

AND

### UPDATE DATA ON CLIENT WITH NEW DATE WHICH SHOULD BE RETURNED FROM "foundOne" EVENT, FOR WHICH YOU MUST ALSO LISTEN TO ALL TIME.

### E.G. WHEN USER UPDATE USERNAME, FETCH ALL USERS 
