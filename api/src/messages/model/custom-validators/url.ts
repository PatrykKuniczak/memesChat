import {
    registerDecorator,
    ValidationArguments
} from "class-validator";


function UrlCustomValidator(
    property: string,
    regExp: RegExp,
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: "urlValidator",
            target: object.constructor,
            propertyName: propertyName,
            validator: {
                validate(value: string, args: ValidationArguments) {
                    const propertyValue = args.object[property];

                    return propertyValue ? regExp.test(value) : true;
                },
                defaultMessage() {
                    return `Message must be URL`;
                }
            }
        });
    };
}

export default UrlCustomValidator;
