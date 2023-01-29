import {SourceType} from "../meme.enums";

export class MemeDto {
    constructor(name: string, sourceType: SourceType, source: string, extension: string) {
        this.name = name;
        this.sourceType = sourceType;
        this.source = source;
        this.extension = extension;
    }

    name: string;
    sourceType: SourceType;
    source: string;
    extension: string;
}
