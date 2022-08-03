import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyViewFilterComponent } from './property-view-filter.component';

describe('PropertyViewFilterComponent', () => {
  let component: PropertyViewFilterComponent;
  let fixture: ComponentFixture<PropertyViewFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyViewFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyViewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
