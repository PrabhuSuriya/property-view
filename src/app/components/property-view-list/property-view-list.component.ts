import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Listing } from '@app/models/properties.model';

@Component({
  selector: 'pv-property-view-list',
  templateUrl: './property-view-list.component.html',
  styleUrls: ['./property-view-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListComponent implements OnInit {

  @Input() properties: Listing[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
