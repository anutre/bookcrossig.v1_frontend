import { createAction } from '@ngrx/store';
import { EAppActionTypes } from '@store/app/EAppActionTypes';

export const appInit = createAction(EAppActionTypes.INIT);
export const checkTermsAgreement = createAction(EAppActionTypes.CHECK_TERMS_AGREEMENT);
export const checkWelcomeAgreement = createAction(EAppActionTypes.CHECK_WELCOME_AGREEMENT);
