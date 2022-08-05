import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listing } from '@app/models/properties.model';
import { QueryFilterModel } from '@app/models/query-body.model';

@Component({
  selector: 'pv-property-view-list',
  templateUrl: './property-view-list.component.html',
  styleUrls: ['./property-view-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListComponent implements OnInit {

  @Input() properties: Listing[] = [];
  @Input() filters!: QueryFilterModel;

  constructor() { }

  ngOnInit(): void {
  }
}
