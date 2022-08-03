import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-property-view-filter',
  templateUrl: './property-view-filter.component.html',
  styleUrls: ['./property-view-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
