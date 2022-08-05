import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pv-property-view-filter',
  templateUrl: './property-view-filter.component.html',
  styleUrls: ['./property-view-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewFilterComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  constructor() { }

  onClose() {
    this.close.emit(false);
  }

  ngOnInit(): void {
  }

}
