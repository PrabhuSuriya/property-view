import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { TooltipModule } from 'primeng/tooltip';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyViewFilterComponent } from './components/property-view-filter/property-view-filter.component';
import { PropertyViewListComponent } from './components/property-view-list/property-view-list.component';
import { PropertyViewMapComponent } from './components/property-view-map/property-view-map.component';
import { PropertyViewComponent } from './pages/property-view/property-view.component';
import { propertyReducer } from './store/property-view/property-view.reducer';
import { PropertyViewEffects } from './store/property-view/property-view.effects';
import { PropertyViewListSearchComponent } from './components/property-view-list-search/property-view-list-search.component';
import { PropertyViewListItemComponent } from './components/property-view-list-item/property-view-list-item.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

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
    HttpClientModule,
    StoreModule.forRoot({ property: propertyReducer }),
    EffectsModule.forRoot([PropertyViewEffects]),
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
