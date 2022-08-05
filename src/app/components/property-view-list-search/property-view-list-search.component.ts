import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QueryFilterModel } from '@app/models/query-body.model';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'pv-property-view-list-search',
  templateUrl: './property-view-list-search.component.html',
  styleUrls: ['./property-view-list-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyViewListSearchComponent implements OnInit {

  @Input() filters!: QueryFilterModel;
  @Output() searchQuery = new EventEmitter<string>();

  debouncer$ = new Subject<string>();
  constructor() {
    this.debouncer$.pipe(
      debounceTime(500)
    ).subscribe(data => {
      this.searchQuery.emit(data);

    })
  }

  onQueryChange(value) {
    this.debouncer$.next(value);
  }

  ngOnInit(): void {
  }

}
