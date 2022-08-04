import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-property-view-list-item',
  templateUrl: './property-view-list-item.component.html',
  styleUrls: ['./property-view-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
