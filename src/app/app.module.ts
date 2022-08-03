import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyViewFilterComponent } from './components/property-view-filter/property-view-filter.component';
import { PropertyViewListComponent } from './components/property-view-list/property-view-list.component';
import { PropertyViewMapComponent } from './components/property-view-map/property-view-map.component';
import { PropertyViewComponent } from './pages/property-view/property-view.component';

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
    AppRoutingModule,
    ButtonModule
  ],
  declarations: [
    AppComponent,
    ...components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
