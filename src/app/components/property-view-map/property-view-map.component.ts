import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Listing, MapViewport } from '@app/models/properties.model';
import { catchError, combineLatest, map, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'pv-property-view-map',
  templateUrl: './property-view-map.component.html',
  styleUrls: ['./property-view-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewMapComponent implements OnChanges {
  @Input() properties: Listing[] = [];
  @Input() viewport!: MapViewport;

  @ViewChild('map') map!: GoogleMap;
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  mapApiLoaded$: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: { lat: 13.101857, lng: 80.286829 },
    zoom: 5,
  };
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    // TODO update marker to discs
    // icon: {
    //   path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
    //   fillColor: 'blue',
    //   strokeColor: '#FFFFFF',
    //   strokeWeight: 3,
    // }
  };
  bounds$: Subject<google.maps.LatLngBounds> = new Subject();
  mapReady$ = new Subject();

  mapMarkers: Marker[] = [];

  constructor(httpClient: HttpClient) {
    this.mapApiLoaded$ = httpClient.jsonp(`${environment.MAP_API_URL}?key=${environment.MAP_API_KEY}`, 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );

    // wait for map to be ready before applying bounds
    combineLatest([this.mapReady$, this.bounds$])
      .subscribe(([_, bounds]) => {
        setTimeout(() => {
          this.map?.fitBounds(bounds);
        }, 1000)
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['properties']?.currentValue) {
      this.mapMarkers = this.properties.map(x => ({
        markerPosition: this.getMarkerPosition(x),
        listing: x
      }));
    }
    if (changes['viewport']?.currentValue) {
      this.bounds$.next(
        new google.maps.LatLngBounds(
          new google.maps.LatLng(this.viewport.swLat, this.viewport.swLong),//south west
          new google.maps.LatLng(this.viewport.neLat, this.viewport.neLong) //north east
        ));
    }
  }

  onMapInitialized() {
    this.mapReady$.next(true);
  }

  openInfoWindow(marker: MapMarker, listing: Listing) {
    this.infoWindow.infoWindow?.setContent(listing.propertyMetadata.propertyName || listing.propertyMetadata.headline);
    this.infoWindow.open(marker);
  }

  getMarkerPosition(listing: Listing): google.maps.LatLngLiteral {
    return {
      lat: listing.geoCode.latitude,
      lng: listing.geoCode.longitude
    }
  }

}

interface Marker {
  markerPosition: google.maps.LatLngLiteral,
  listing: Listing
}
