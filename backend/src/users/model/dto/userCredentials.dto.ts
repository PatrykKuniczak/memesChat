import { Length } from "class-validator";

export class UserCredentialsDto {
	@Length(10, 50)
	username: string;

	@Length(10, 80)
	password: string;
}
