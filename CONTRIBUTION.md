GIT CLONE: https://github.com/PatrykKuniczak/memesChat.git

### HOST EACH APP STANDALONE:

##### GO TO FRONTEND AND BACKEND DIRECTORIES, AND DO IT FOR EACH:

    CREATE ".env" FILE IN EACH APP ROOT DIRECTORY, VALUES:
        
        FOR API:

        DB_TYPE=postgres # DON'T CHANGE IT #
        POSTGRES_USER=postgres
        POSTGRES_PASSWORD=postgres
        POSTGRES_HOST=localhost
        POSTGRES_PORT=5432
        POSTGRES_DB=live_chat_dev # DON'T CHANGE IT #
        DB_URL=$DB_TYPE://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB # DON'T CHANGE IT #
        SERVER_PORT=3030 (If u have something on that, change it)
        JWT_SECRET=randomSecret
        CLIENT_URL=http://localhost:3000 (If u use other port, remeber to change it here)
        DEVELOPMENT=true - if it's true, then validation is OFF and accept requests from all hosts (skip CORS check), leave empty for default behaviour
        DEFAULT_JWT_TOKEN= Default token for swagger for development operation, leave empty for default app behavior, 
        work only if "DEVELOPMENT=true"
        ### THE DB CREDENTIALS IS DEFAULT, YOU MAY HAVE OTHER ###

        FOR WS: ### CREATE IT IN ROOT/CONFIG/ENV ### THAT'S SOLUTION FOR CURRENT DEVELOPMENT STATUS
            dev.env:
                PORT=3040
                GATEWAY_PORT=3050
                API_URL=http://localhost:3030/api (YOU MAY HAVE OTHER PORT)
                CLIENT_URL=http://localhost:3000 (YOU MAY HAVE OTHER PORT)
                DEVELOPMENT=true - if it's true, then you can create request from any host,
                leave empty for default behavior, accept only specific CORS
    
            U CAN TAKE DATA FROM "example.env"

        FOR FRONTEND:
            REACT_APP_API_URL=http://localhost:3030/api/ (or other youre host/port)

        RUN NPM I FOR EACH
        
        START API AND WS: 'npm run start:dev'
        START FRONTEND: 'npm start'

FOR DOCKER

The hints for env values are the same as in standalone envs config

### DON'T CHANGE ALL CREDENTIALS EXCEPT PORTS(IF NEEDED) AND DEVELOPMENT AND DEFAULT_JWT_TOKEN

    CREATE ".env" FILE IN ROOT (OUTSIDE OF APPS), VALUES:

        DB_TYPE=postgres
        POSTGRES_USER=postgres
        POSTGRES_PASSWORD=postgres
        POSTGRES_HOST=db
        POSTGRES_PORT=5432
        POSTGRES_DB=live_chat
        DB_URL=$DB_TYPE://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB
        SERVER_PORT=3030
        JWT_SECRET=randomSecret
        REACT_APP_PORT=3000
        REACT_APP_API_URL=http://localhost:3030/api/
        CLIENT_URL=http://localhost:3000
        DEVELOPMENT=
        DEFAULT_JWT_TOKEN=
        WS_SERVER_PORT=3040
        WS_GATEWAY_PORT=3050

##### IF U HAVE PORTS: 3030 AND 3000 EMPTY, USE DEFAULT VALUES

RUN ```docker-compose up```

CONFIGURE PRETTIER IN YOUR IDE:

    PRETTIER IS IN ROOT(OUTER OF APPS) DIR:

    memesChat\node_modules\prettier

EP. FOR WEBSTORM:\
https://blog.jetbrains.com/webstorm/2020/07/webstorm-2020-2/

CONFIGURE RELATIVE IMPORT PATHS IN YOUR IDE:

    IN WEBSTORM GO TO SETTING:
        EDITOR/CODE STYLE/TYPESCRIPT
            [*] USE PATHS RELATIVE TO TSCONFIG.JSON

ENJOY YOUR TASKS