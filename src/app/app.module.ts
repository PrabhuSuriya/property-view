import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

import { GoogleMapsModule } from '@angular/google-maps';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyViewFilterComponent } from './components/property-view-filter/property-view-filter.component';
import { PropertyViewListItemComponent } from './components/property-view-list-item/property-view-list-item.component';
import { PropertyViewListSearchComponent } from './components/property-view-list-search/property-view-list-search.component';
import { PropertyViewListComponent } from './components/property-view-list/property-view-list.component';
import { PropertyViewMapComponent } from './components/property-view-map/property-view-map.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { PropertyViewComponent } from './pages/property-view/property-view.component';
import { PropertyViewEffects } from './store/property-view/property-view.effects';
import { propertyReducer } from './store/property-view/property-view.reducer';
import { CommonModule } from '@angular/common';

const components = [
  PropertyViewComponent,
  PropertyViewListComponent,
  PropertyViewMapComponent,
  PropertyViewFilterComponent
];

const primeModules = [
  ButtonModule,
  InputTextModule,
  CheckboxModule,
  TooltipModule,
]

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    StoreModule.forRoot({ property: propertyReducer }),
    EffectsModule.forRoot([PropertyViewEffects]),
    GoogleMapsModule,
    AppRoutingModule,
    ...primeModules
  ],
  declarations: [
    AppComponent,
    ...components,
    PropertyViewListSearchComponent,
    PropertyViewListItemComponent,
    StarRatingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
