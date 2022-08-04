import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pv-property-view-map',
  templateUrl: './property-view-map.component.html',
  styleUrls: ['./property-view-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewMapComponent implements OnInit {
  mapApiLoaded$: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: { lat: 13.101857, lng: 80.286829 },
    zoom: 14,
  };


  constructor(httpClient: HttpClient) {
    this.mapApiLoaded$ = httpClient.jsonp(`${environment.MAP_API_URL}?key=${environment.MAP_API_KEY}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
  }

}
