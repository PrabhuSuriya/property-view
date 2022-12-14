import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { QueryFilterModel } from '@app/models/query-body.model';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'pv-property-view-list-search',
  templateUrl: './property-view-list-search.component.html',
  styleUrls: ['./property-view-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListSearchComponent {

  @Input() filters!: QueryFilterModel;
  @Output() searchQuery = new EventEmitter<string>();
  @Output() filterToggle = new EventEmitter<boolean>();

  debouncer$ = new Subject<string>();
  constructor() {
    this.debouncer$.pipe(
      debounceTime(800)
    ).subscribe(data => {
      this.searchQuery.emit(data);
    });
  }

  onQueryChange(value) {
    this.debouncer$.next(value);
  }

  onFilterToggle() {
    this.filterToggle.emit(true);
  }

}
