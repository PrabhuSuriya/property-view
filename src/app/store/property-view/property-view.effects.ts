import { Injectable } from "@angular/core";
import { LoaderService } from "@app/services/loader.service";
import { PropertyViewService } from "@app/services/property-view.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, finalize, map, switchMap, tap } from "rxjs";
import { LoadProperties } from "./property-view.actions";


@Injectable()
export class PropertyViewEffects {
  constructor(private actions$: Actions, private propertyViewSvc: PropertyViewService, private loaderSvc: LoaderService) { }

  // Fetch Properties from API
  loadProperties$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadProperties.init),
      tap(() => this.loaderSvc.showLoader()),
      switchMap((action) =>
        this.propertyViewSvc.getProperties(action.filters)
          .pipe(
            map((response) => LoadProperties.success({ listings: response?.data?.results?.listings, mapViewport: response?.data?.results?.mapViewport })),
            catchError((err) => [LoadProperties.failure({ message: '' })]), // TODO dispatch notification here
            finalize(() => this.loaderSvc.hideLoader())
          )
      )));

}
