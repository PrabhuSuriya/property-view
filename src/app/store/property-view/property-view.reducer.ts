import { Listing } from '@app/models/properties.model';
import { createReducer, on } from '@ngrx/store';
import { SetProperties } from './property-view.actions';

export interface PropertyViewModel {
  properties: Listing[];
}

export const INITIAL_STATE: PropertyViewModel = {
  properties: [],
}

export const propertyReducer = createReducer(
  INITIAL_STATE,

  on(SetProperties.init, state => {
    const s = {
      ...state,
      properties: [{ "listingNumber": 4704285 } as any]
    }
    console.log(s)
    return s;
  }),
);
