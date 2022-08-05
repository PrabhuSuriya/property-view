import { Listing, MapViewport } from '@app/models/properties.model';
import { QueryFilterModel } from '@app/models/query-body.model';
import { createAction, props } from '@ngrx/store';
import { createAsyncAction } from '../action.utils';

export const LoadProperties = createAsyncAction(
  '[Property View] Load Properties',
  props<{ filters: QueryFilterModel }>(),
  props<{ listings: Listing[], mapViewport: MapViewport }>(),
  props<{ message: string }>()
);

export const UpdateFilter = createAction(
  '[Property View] Update Filter',
  props<{ filters: QueryFilterModel }>()
);
