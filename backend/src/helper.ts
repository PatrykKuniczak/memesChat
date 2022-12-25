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
export const CLIENT_PORT = +process.env.WS_CLIENT_PORT;

export default isValid;