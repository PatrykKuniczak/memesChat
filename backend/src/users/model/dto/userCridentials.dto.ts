import { Length, MinLength } from "class-validator";

export class UserCridentialsDto {
	@Length(10, 50)
	username: string;

	@MinLength(10)
	password: string;
}
