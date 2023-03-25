# EVENTS ENDPOINTS:

#### emit - it's this what you must emit to server

#### listen to - it's this what you must listen to on client

##### THE DATA WHICH BE RETURNED IS THE SAME AS API (FOR THAT INFO GO TO API DOCS (SWAGGER)), /EXCEPT THAT WHICH HAVE SPECIFIC INFORMATION HERE

```
emit -> "createMessage" with payload: {content: string, isImage: boolean}
listen to: "createdMessage", Return the created message object

emit -> "findAllMessages"
listen to: "foundMessages", Return all messages or empty Array

emit -> "deleteMessage" with payload: {id: number}
listen to: "deletedMessage", Return { id: number, statusCode: number }

emit -> "editMessage" with payload: {id:number, content: string}
listen to: "editedMessage", Return { statusCode: number }

listen to: "exception" for recive exception which can be thrown on each event above
exception object structure:
{
    "statusCode": number,
    "message": string | string[]
    "error": string 
}

emit -> "typing" with payload: {isTyping: boolean, username: string}
listen to: "typing" Return payload 
(REMEMBER TO CREATE E.G. 2 SECONDS DELAY BETWEEN CHANGE ISTYPING STATE, FOR BETTER UX)

For check online users amount listen to: "onlineUsersAmount" Return {onlineUsersAmount: number}
```

### REMEMBER TO LISTEN ON ALL CLIENTS FOR EVERYTHING EXCEPT 'findAllMessages' ALL TIME, AND UPDATE DATA WHEN EMIT SOMETHING
