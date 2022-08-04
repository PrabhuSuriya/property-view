import { Injectable } from "@angular/core";
import { PropertyViewService } from "@app/services/property-view.service";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs";
import { LoadProperties } from "./property-view.actions";


@Injectable()
export class PropertyViewEffects {
  constructor(private actions$: Actions, private propertyViewSvc: PropertyViewService) { }

  loadProperties$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadProperties.init),
      switchMap((action) =>
        this.propertyViewSvc.getProperties(action.filters)
          .pipe(
            map((response) => LoadProperties.success({ listings: response?.data?.results?.listings })),
            catchError((err) => [LoadProperties.failure({ message: '' })]) // TODO dispatch notification here
          )
      )));

}
