export const configuration = () => ({
    NODE_ENV: process.env.NODE_ENV,
    port: +process.env.PORT,
    jwt: {
        secret: process.env.JWT_SECRET,
    }
});
