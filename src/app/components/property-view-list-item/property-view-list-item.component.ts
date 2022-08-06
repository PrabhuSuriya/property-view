import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Listing } from '@app/models/properties.model';

@Component({
  selector: 'pv-property-view-list-item',
  templateUrl: './property-view-list-item.component.html',
  styleUrls: ['./property-view-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListItemComponent {
  @Input() property!: Listing;
}
