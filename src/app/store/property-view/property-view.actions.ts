import { createAction, props } from '@ngrx/store';
import { createAsyncAction } from '../action.utils';

export const SetProperties = createAsyncAction(
  '[Property View] Set Properties Sample',
  props<Object>(),
  props<Object>(),
  props<Object>()
);
