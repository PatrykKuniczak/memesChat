import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments
} from "class-validator";

function MessageLengthValidator(
    property: string,
    minLength: number,
    maxLength: number,
    validationOptions?: ValidationOptions
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "messageLengthValidator",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: string, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = (args.object as any)[
                        relatedPropertyName
                    ];

                    if (!relatedValue)
                        if (value)
                            return (
                                value.length >= minLength &&
                                value.length <= maxLength
                            );
                    return true;
                },
                defaultMessage() {
                    return `The message must be bigger than ${minLength} and less then ${maxLength} characters.`;
                }
            }
        });
    };
}

export default MessageLengthValidator;
