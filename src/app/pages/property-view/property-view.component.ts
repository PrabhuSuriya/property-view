import { Component, OnInit } from '@angular/core';
import { SetProperties } from '@app/store/property-view/property-view.actions';
import { PVState } from '@app/store/state';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.scss']
})
export class PropertyViewComponent implements OnInit {

  data$: Observable<any> = of(null);
  constructor(private store: Store<PVState>) {
    this.data$ = this.store.select(s => s.property.properties);
  }

  ngOnInit(): void {
    this.store.select(s => s.property.properties).subscribe(data => {
      console.log(data);
    });

  }

  getData() {
    this.store.dispatch(SetProperties.init({}));
  }

}
