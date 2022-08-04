import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Listing } from '@app/models/properties.model';

@Component({
  selector: 'pv-property-view-list-item',
  templateUrl: './property-view-list-item.component.html',
  styleUrls: ['./property-view-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListItemComponent implements OnInit {
  @Input() property!: Listing;

  constructor() { }

  ngOnInit(): void {
    console.log(this.property)
  }

}
