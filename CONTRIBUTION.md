GIT CLONE: https://github.com/PatrykKuniczak/memesChat.git

### HOST EACH APP STANDALONE:

##### GO TO FRONTEND AND BACKEND DIRECTORIES, AND DO IT FOR EACH:

    CREATE ".env" FILE IN EACH APP ROOT DIRECTORY, VALUES:
        
        FOR BACKEND:

        DB_TYPE=postgres # DON'T CHANGE IT #
        POSTGRES_USER=postgres
        POSTGRES_PASSWORD=postgres
        POSTGRES_HOST=localhost
        POSTGRES_PORT=5432
        POSTGRES_DB=live_chat_dev # DON'T CHANGE IT #
        DB_URL=$DB_TYPE://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST:$POSTGRES_PORT/$POSTGRES_DB # DON'T CHANGE IT #
        SERVER_PORT=3030 (If u have something on that, change it)
        JWT_SECRET=randomSecret
        DEVELOPMENT=true - if it's true, then validation is OFF, leave empty for default validation
        DEFAULT_JWT_TOKEN= Default token for swagger for development operation, leave empty for default app behavior, 
        work only if "DEVELOPMENT=true"

        ### THE DB CREDENTIALS IS DEFAULT, YOU MAY HAVE OTHER ###

        FOR FRONTEND:
            REACT_APP_API_URL=http://localhost:3030/api/ (or other youre host/port)

        RUN NPM I FOR EACH
        
        START BACKEND: 'npm run start:dev'
        START FRONTEND: 'npm start'

FOR DOCKER

The hints for env values it's the same as in standalone envs config

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
        DEVELOPMENT=
        DEFAULT_JWT_TOKEN=

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