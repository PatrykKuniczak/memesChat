import { ArgumentMetadata, Injectable, ValidationPipe } from "@nestjs/common";

@Injectable()
export class GlobalValidatePipe extends ValidationPipe {

  override transform(value: any, metadata: ArgumentMetadata) {
    if (JSON.parse(JSON.stringify(value)).hasOwnProperty("username"))
      value.username = value.username.replace(/\s/g, "").toLowerCase();

    return super.transform(value, metadata);
  }
}