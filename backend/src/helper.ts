import * as dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const WS_CLIENT_PORT = +process.env.WS_PORT;
export const WS_CLIENT_URL = process.env.WS_URL;
