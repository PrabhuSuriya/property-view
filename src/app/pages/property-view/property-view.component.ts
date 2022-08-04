import { Component, OnInit } from '@angular/core';
import { Listing } from '@app/models/properties.model';
import { CoreFilters } from '@app/models/query-body.model';
import { LoadProperties } from '@app/store/property-view/property-view.actions';
import { PVState } from '@app/store/state';
import { Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';

@Component({
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.scss']
})
export class PropertyViewComponent implements OnInit {

  properties$: Observable<Listing[]>;
  propertiesFilter$: Observable<CoreFilters>;

  constructor(private store: Store<PVState>) {
    this.properties$ = this.store.select(s => s.property.properties).pipe(
      startWith([]),
      map(this.formatPropertyData)
    );

    this.propertiesFilter$ = this.store.select(s => s.property.propertiesFilter);
  }

  ngOnInit(): void {
    this.propertiesFilter$.subscribe(propertyFilters => {
      this.store.dispatch(LoadProperties.init({ filters: propertyFilters }));
    });
  }

  formatPropertyData(property: Listing[]): Listing[] {
    return property.map(p => ({
      ...p,
      roomInfo: `${p.bedrooms} br . ${p.bathrooms.full} ba . Sleeps ${p.sleeps}`, //TODO implement i18n
      roomInfoFull: `${p.bedrooms} Bedrooms \n ${p.bathrooms.full} Full Bathrooms \n ${p.bathrooms.half} Half Bathrooms \n ${p.sleeps} Sleeps `, //TODO implement i18n
    }));
  }

}
