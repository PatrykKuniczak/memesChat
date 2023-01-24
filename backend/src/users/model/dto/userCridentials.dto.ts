import { Length } from "class-validator";

export class UserCridentialsDto {
	@Length(10, 50)
	username: string;

	@Length(10, 80)
	password: string;
}
