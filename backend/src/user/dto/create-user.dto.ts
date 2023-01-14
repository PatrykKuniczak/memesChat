import { MinLength } from "class-validator";


export class CreateUserDto {
  @MinLength(3, {message: `Min length is $constraint1`})
  name?: string;

  clientId: string;
}