import {
    registerDecorator,
    ValidationArguments
} from "class-validator";

function MessageLengthCustomValidator(
    property: string,
    minLength: number,
    maxLength: number,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "messageLengthValidator",
            target: object.constructor,
            propertyName: propertyName,
            validator: {
                validate(value: string, args: ValidationArguments) {
                    const propertyValue = args.object[property];

                    return !propertyValue ? value.length >= minLength && value.length <= maxLength : true;
                },
                defaultMessage() {
                    return `The message must be bigger than ${minLength} and less then ${maxLength} characters.`;
                }
            }
        });
    };
}

export default MessageLengthCustomValidator;
