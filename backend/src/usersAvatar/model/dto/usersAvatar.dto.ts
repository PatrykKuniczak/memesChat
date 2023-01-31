export class UsersAvatarDto {
	constructor(
		name: string,
		source: string,
		extension: string
	) {
		this.name = name;
		this.source = source;
		this.extension = extension;
	}

	name: string;
	source: string;
	extension: string;
}
