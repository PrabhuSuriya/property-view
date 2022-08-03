import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyViewListComponent } from './property-view-list.component';

describe('PropertyViewListComponent', () => {
  let component: PropertyViewListComponent;
  let fixture: ComponentFixture<PropertyViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
