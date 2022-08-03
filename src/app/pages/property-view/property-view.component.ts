import { Component, OnInit } from '@angular/core';
import { PropertyViewService } from '@app/services/property-view.service';
import { Observable, of } from 'rxjs';

@Component({
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.scss']
})
export class PropertyViewComponent implements OnInit {

  data$: Observable<any> = of(null);
  constructor(private propertyViewSvc: PropertyViewService) { }

  ngOnInit(): void {

  }

  getData() {
    this.data$ = this.propertyViewSvc.getProperties(null as any);
  }

}
