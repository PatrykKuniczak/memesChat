FOR CONTRIBUTE:

GIT CLONE: https://github.com/PatrykKuniczak/memesChat.git

GO TO FRONTEND AND BACKEND DIRECTORIES, AND DO IT FOR EACH:
CREATE ".env" FILE IN ROOT DIRECTORY, VALUES:

FOR BACKEND:
DB_URL=postgres://USERNAME:PASSWORD@HOST:PORT/DB
SERVER_PORT=
WS_PORT= SAME AS REACT_APP_WS_PORT

FOR FRONTEND:
REACT_APP_WS_PORT= SAME AS WS_PORT

RUN NPM I

START BACKEND: 'npm run start:dev'
START FRONTEND: 'npm start'

ENJOY YOUR TASKS

[//]: # (FOR DOCKER)

[//]: # (CREATE ".env" FILE IN COMPOSE-DEV AND -PROD DIRECTORY, VALUES:)

[//]: # ()

[//]: # (    DB_PORT=)

[//]: # (    POSTGRES_USER:)

[//]: # (    POSTGRES_PASSWORD:)

[//]: # (    POSTGRES_DB:)

[//]: # (    DB_TYPE= postgres)

[//]: # (    DB_URL=${DB_TYPE}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:${DB_PORT}/${POSTGRES_DB})

[//]: # (    SERVER_PORT=)

[//]: # (    WS_PORT=)

[//]: # (    REACT_APP_WS_URL=http://localhost:${WS_PORT})

[//]: # (    FRONT_PORT=3000)

[//]: # ()

[//]: # (REMEMBER TO USE DIFFERENT DATABASE FOR EACH COMPOSE)

[//]: # ()

[//]: # (RUN NPM I)

[//]: # ()

[//]: # (AND DEPENDS ON OPERATION:)

[//]: # ()

[//]: # (GO ON COMPOSE-PROD DIRECTORY AND RUN:)

[//]: # ()

[//]: # (    docker-compose -f docker-compose-prod.yml up)

[//]: # ()

[//]: # (OR -DEV:)

[//]: # (    )

[//]: # (    docker-compose -f docker-compose-dev.yml up)