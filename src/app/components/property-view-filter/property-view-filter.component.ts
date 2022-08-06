import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreFilters } from '@app/models/query-body.model';

const MAX_COUNT = 9;
const MIN_COUNT = 0;

@Component({
  selector: 'pv-property-view-filter',
  templateUrl: './property-view-filter.component.html',
  styleUrls: ['./property-view-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewFilterComponent {
  @Input() coreFilters!: CoreFilters;
  @Output() close = new EventEmitter<boolean>();
  @Output() filterChange = new EventEmitter<CoreFilters>();

  onClose() {
    this.close.emit(false);
  }

  onApply() {
    this.filterChange.emit(this.coreFilters);
    this.close.emit(false);
  }

  changeCount(field: string, operation: string) {
    switch (operation) {
      case '+': {
        this.coreFilters[field] < MAX_COUNT && this.coreFilters[field]++;
        break;
      }
      case '-': {
        this.coreFilters[field] > MIN_COUNT && this.coreFilters[field]--;
        break;
      }
    }
  }

}
