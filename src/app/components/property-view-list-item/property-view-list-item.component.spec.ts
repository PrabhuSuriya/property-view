import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyViewListItemComponent } from './property-view-list-item.component';

describe('PropertyViewListItemComponent', () => {
  let component: PropertyViewListItemComponent;
  let fixture: ComponentFixture<PropertyViewListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyViewListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyViewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
