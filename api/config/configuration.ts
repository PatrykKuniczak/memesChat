export const configuration = () => ({
    port: +process.env.PORT,
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    database: {
        type: process.env.DB_TYPE,
        host: process.env.POSTGRES_HOST,
        port: +process.env.POSTGRES_PORT,
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
    },
    devOptions: {
        development: process.env.DEVELOPMENT,
        defaultJwtToken: process.env.DEFAULT_JWT_TOKEN,
    }
});
