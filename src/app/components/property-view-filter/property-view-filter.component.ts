import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CoreFilters } from '@app/models/query-body.model';

@Component({
  selector: 'pv-property-view-filter',
  templateUrl: './property-view-filter.component.html',
  styleUrls: ['./property-view-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewFilterComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  @Output() filterChange = new EventEmitter<CoreFilters>();


  constructor() { }

  onClose() {
    this.close.emit(false);
  }

  ngOnInit(): void {
  }

}
