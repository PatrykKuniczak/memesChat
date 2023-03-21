import { registerDecorator, ValidationArguments } from "class-validator";

function UrlCustomValidator(property: string, regExp: RegExp) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: "urlValidator",
            target: object.constructor,
            propertyName: propertyName,
            validator: {
                validate(value: string, args: ValidationArguments) {
                    const relatedPropertyValue = args.object[property];

                    return relatedPropertyValue ? regExp.test(value) : true;
                },
                defaultMessage() {
                    return `Message must be URL`;
                }
            }
        });
    };
}

export default UrlCustomValidator;
