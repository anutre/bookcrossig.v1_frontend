import { createAction, props } from '@ngrx/store';
import { EHttpErrorActionTypes } from '@store/http-error/EHttpErorActionTypes';

export const handleHttpError = createAction(
  EHttpErrorActionTypes.HANDLE_ERROR,
  props<{ error: { status: number; message: string } }>(),
);

export const clearHttpError = createAction(EHttpErrorActionTypes.CLEAR_ERROR);
