FOR CONTRIBUTE:

GIT CLONE: https://github.com/PatrykKuniczak/memesChat.git

HOST EACH APP STANDALONE:\
GO TO FRONTEND AND BACKEND DIRECTORIES, AND DO IT FOR EACH:\

    CREATE ".env" FILE IN EACH APP ROOT DIRECTORY, VALUES:
        
        FOR BACKEND:
        DB_TYPE=postgres
        DB_URL=postgres://USERNAME:PASSWORD@HOST:PORT/DB
        SERVER_PORT=
        WS_PORT= 
        WS_URL=http://HOST:WS_PORT

        FOR FRONTEND:
        REACT_APP_WS_URL=http://HOST:WS_PORT(BACKEND)


        RUN NPM I
        
        START BACKEND: 'npm run start:dev'
        START FRONTEND: 'npm start'

FOR DOCKER

    CREATE ".env" FILE IN COMPOSE-DEV AND -PROD DIRECTORY, VALUES:

        DB_PORT=
    
        POSTGRES_USER:
    
        POSTGRES_PASSWORD:
    
        POSTGRES_DB: USE DIFFERENT DATABASE FOR EACH COMPOSE
    
        DB_TYPE=postgres
    
        DB_URL=${DB_TYPE}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:${DB_PORT}/${POSTGRES_DB}
    
        SERVER_PORT=
    
        WS_PORT=
    
        REACT_APP_WS_URL=http://localhost:${WS_PORT}
    
        FRONT_PORT=3000

// DON'T CHANGE PREDEFINED VALUES //

RUN NPM I

AND DEPENDS ON OPERATION:

GO ON COMPOSE-PROD DIRECTORY AND RUN:

    docker-compose -f docker-compose-prod.yml up

OR -DEV:

    docker-compose -f docker-compose-dev.yml up

ENJOY YOUR TASKS