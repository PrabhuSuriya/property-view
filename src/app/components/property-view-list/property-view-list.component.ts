import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Listing } from '@app/models/properties.model';
import { QueryFilterModel } from '@app/models/query-body.model';

@Component({
  selector: 'pv-property-view-list',
  templateUrl: './property-view-list.component.html',
  styleUrls: ['./property-view-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListComponent {

  @Input() properties: Listing[] = [];
  @Input() filters!: QueryFilterModel;
}
