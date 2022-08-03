import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyViewFilterComponent } from './components/property-view-filter/property-view-filter.component';
import { PropertyViewListComponent } from './components/property-view-list/property-view-list.component';
import { PropertyViewMapComponent } from './components/property-view-map/property-view-map.component';
import { PropertyViewComponent } from './pages/property-view/property-view.component';
import { propertyReducer } from './store/property-view/property-view.reducer';

const components = [
  PropertyViewComponent,
  PropertyViewListComponent,
  PropertyViewMapComponent,
  PropertyViewFilterComponent
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ property: propertyReducer }),
    AppRoutingModule,
    ButtonModule,
  ],
  declarations: [
    AppComponent,
    ...components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
