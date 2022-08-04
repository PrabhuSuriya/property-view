import { Listing, MapViewport } from '@app/models/properties.model';
import { CoreFilters } from '@app/models/query-body.model';
import { createReducer, on } from '@ngrx/store';
import { LoadProperties } from './property-view.actions';

export interface PropertyViewModel {
  properties: Listing[];
  propertiesFilter: CoreFilters;
  mapViewPort?: MapViewport;
}

export const INITIAL_STATE: PropertyViewModel = {
  properties: [],
  propertiesFilter: {},
}

export const propertyReducer = createReducer(
  INITIAL_STATE,

  on(LoadProperties.success, (state, action) => {
    return {
      ...state,
      properties: action.listings,
      mapViewPort: action.mapViewport
    };
  })
);
