import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyViewComponent } from './pages/property-view/property-view.component';

const routes: Routes = [
  { path: 'properties', component: PropertyViewComponent },
  { path: '**', redirectTo: 'properties' },
  { path: '', redirectTo: 'properties', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
