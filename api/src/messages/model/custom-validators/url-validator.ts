import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments
} from "class-validator";

function UrlValidator(
    property: string,
    regExp: RegExp,
    validationOptions?: ValidationOptions
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "urlValidator",
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

                    if (relatedValue && value) return regExp.test(value);
                    return true;
                },
                defaultMessage() {
                    return `Message must be URL`;
                }
            }
        });
    };
}

export default UrlValidator;
