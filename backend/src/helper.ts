import { validateOrReject } from "class-validator";


async function isValid(input) {
  try {
    return await validateOrReject(input);
  } catch (err) {
    return err;
  }
}

export const CLIENT_PORT = +process.env.WS_PORT;
export const CLIENT_URL= process.env.REACT_APP_WS_URL;

export default isValid;