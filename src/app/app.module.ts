import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyViewComponent } from './pages/property-view/property-view.component';
import { PropertyViewListComponent } from './components/property-view-list/property-view-list.component';
import { PropertyViewMapComponent } from './components/property-view-map/property-view-map.component';
import { PropertyViewFilterComponent } from './components/property-view-filter/property-view-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyViewComponent,
    PropertyViewListComponent,
    PropertyViewMapComponent,
    PropertyViewFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
