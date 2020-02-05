import { ValidationTypes, ValidationArguments } from 'class-validator';

export function patchClassValidatorI18n(i18next) {
  const orig = ValidationTypes.getMessage.bind(ValidationTypes);
  ValidationTypes.getMessage = (
    type: string,
    isEach: boolean
  ): string | ((args: ValidationArguments) => string) => {
    switch (type) {
      case ValidationTypes.IS_EMAIL:
        return i18next.t('validations.is_email');
      case ValidationTypes.MIN_LENGTH:
        return i18next.t('validations.min_length', {
          threshold: '$constraint1'
        });

      // return the original (English) message from class-validator when a type is not handled
      default:
        return orig(type, isEach);
    }
  };
}
