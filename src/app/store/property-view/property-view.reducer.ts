import { Listing, MapViewport } from '@app/models/properties.model';
import { QueryFilterModel } from '@app/models/query-body.model';
import { createReducer, on } from '@ngrx/store';
import { LoadProperties, UpdateFilter } from './property-view.actions';

export interface PropertyViewModel {
  properties: Listing[];
  propertiesFilter: QueryFilterModel;
  mapViewPort?: MapViewport;
}

export const INITIAL_STATE: PropertyViewModel = {
  properties: [],
  propertiesFilter: {
    coreFilters: {
      maxBathrooms: null,
      maxBedrooms: null,
      maxSleeps: null,
      maxNightlyPrice: null,
      maxTotalPrice: null,
      minBathrooms: 0,
      minBedrooms: 0,
      minSleeps: 0,
      minNightlyPrice: 0,
      minTotalPrice: null,
      pets: 0
    },
    q: 'chicago'
  },
}

export const propertyReducer = createReducer(
  INITIAL_STATE,

  on(LoadProperties.success, (state, action) => {
    return {
      ...state,
      properties: action.listings,
      mapViewPort: action.mapViewport
    };
  }),
  on(UpdateFilter, (state, action) => {
    return {
      ...state,
      propertiesFilter: { ...state.propertiesFilter, ...action.filters, }
    };
  }),
);
