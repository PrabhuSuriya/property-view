import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pv-property-view-list-search',
  templateUrl: './property-view-list-search.component.html',
  styleUrls: ['./property-view-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
