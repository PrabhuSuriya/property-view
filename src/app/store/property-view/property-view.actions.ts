import { Listing } from '@app/models/properties.model';
import { CoreFilters } from '@app/models/query-body.model';
import { props } from '@ngrx/store';
import { createAsyncAction } from '../action.utils';

export const LoadProperties = createAsyncAction(
  '[Property View] Load Properties',
  props<{ filters: CoreFilters }>(),
  props<{ listings: Listing[] }>(),
  props<{ message: string }>()
);
