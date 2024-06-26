import { Injectable } from '@angular/core';
import lpn from 'google-libphonenumber';
import { ValidationErrors } from '@angular/forms';
import { validationMsgMap } from '@shared/config/validation.config';

@Injectable()
export class ControlService {
  private phoneUtil = lpn.PhoneNumberUtil.getInstance();

  constructor() {}

  getValidationErrors(
    inputErrors: ValidationErrors | null | undefined,
    inputType: string | undefined,
  ): string[] {
    if (!inputErrors) return [];

    const errorsList: string[] = [];

    for (const err in inputErrors) {
      const isErrExist: boolean = errorsList.includes(
        validationMsgMap[err as keyof typeof validationMsgMap],
      );

      const errName = err === 'pattern' ? `${inputType}Pattern` : err;
      const requiredLength = inputErrors[err].requiredLength;

      if (!isErrExist) {
        let errMessage: string =
          validationMsgMap[errName as keyof typeof validationMsgMap] || validationMsgMap.default;

        if (requiredLength) {
          errMessage = errMessage.replace('${requiredLength}', requiredLength);
        }

        errorsList.push(errMessage);
      }
    }

    return errorsList;
  }

  getE164Number(phoneNumber: string, countryCode: string): string {
    const PNF = lpn.PhoneNumberFormat;

    try {
      const number = this.phoneUtil.parseAndKeepRawInput(phoneNumber, countryCode);

      return this.phoneUtil.format(number, PNF.E164);
    } catch (e) {
      return phoneNumber;
    }
  }

  getIsPhoneValid(phoneNumber: string, countryCode: string): boolean {
    try {
      return this.phoneUtil.isValidNumberForRegion(
        this.phoneUtil.parse(phoneNumber, countryCode.toUpperCase()),
        countryCode.toUpperCase(),
      );
    } catch (e) {
      return false;
    }
  }
}
