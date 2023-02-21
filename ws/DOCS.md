## EVENTS ENDPOINTS:

#### emit - it's this what you must emit to server
#### listen to - it's this what you must listen to on client

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
