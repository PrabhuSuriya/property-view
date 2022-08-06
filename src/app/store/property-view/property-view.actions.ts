import { Listing, MapViewport } from '@app/models/properties.model';
import { QueryFilterModel } from '@app/models/query-body.model';
import { createAction, props } from '@ngrx/store';
import { createAsyncAction } from '../action.utils';

// action names
const LOAD_PROPERTIES = '[Property View] Load Properties';
const UPDATE_FILTER = '[Property View] Update Filter';


// Actions

// Fetch data from api with given filters
export const LoadProperties = createAsyncAction(
  LOAD_PROPERTIES,
  props<{ filters: QueryFilterModel }>(),
  props<{ listings: Listing[], mapViewport: MapViewport }>(),
  props<{ message: string }>()
);

// Update filters when user changes in the UI
export const UpdateFilter = createAction(
  UPDATE_FILTER,
  props<{ filters: QueryFilterModel }>()
);
