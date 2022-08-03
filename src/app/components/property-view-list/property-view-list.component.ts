import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-property-view-list',
  templateUrl: './property-view-list.component.html',
  styleUrls: ['./property-view-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
