import { validateOrReject } from "class-validator";
import * as dotenv from "dotenv";

async function isValid(input) {
	try {
		return await validateOrReject(input);
	} catch (err) {
		return err;
	}
}

dotenv.config({ path: "./.env" });

export const WS_CLIENT_PORT = +process.env.WS_PORT;
export const WS_CLIENT_URL = process.env.WS_URL;

export default isValid;
