import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'pv-property-view-map',
  templateUrl: './property-view-map.component.html',
  styleUrls: ['./property-view-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
