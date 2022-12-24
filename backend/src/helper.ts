import { validateOrReject } from "class-validator";


async function isValid(input) {
  try {
    return await validateOrReject(input);
  } catch (err) {
    return err;
  }
}


export default isValid;