import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyViewListSearchComponent } from './property-view-list-search.component';

describe('PropertyViewListSearchComponent', () => {
  let component: PropertyViewListSearchComponent;
  let fixture: ComponentFixture<PropertyViewListSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyViewListSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyViewListSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
