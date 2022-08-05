import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoreFilters } from '@app/models/query-body.model';

@Component({
  selector: 'pv-property-view-filter',
  templateUrl: './property-view-filter.component.html',
  styleUrls: ['./property-view-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewFilterComponent implements OnInit {
  @Input() coreFilters!: CoreFilters;
  @Output() close = new EventEmitter<boolean>();
  @Output() filterChange = new EventEmitter<CoreFilters>();


  constructor() { }

  onClose() {
    this.close.emit(false);
  }

  onApply() {
    this.filterChange.emit(this.coreFilters);
    this.close.emit(false);
  }

  ngOnInit(): void {
  }

  changeCount(field: string, operation: string) {
    switch (operation) {
      case '+': {
        this.coreFilters[field] < 9 && (this.coreFilters[field] = this.coreFilters[field] + 1);
        break;
      }
      case '-': {
        this.coreFilters[field] > 0 && (this.coreFilters[field] = this.coreFilters[field] - 1);
        break;
      }
    }
  }

}
