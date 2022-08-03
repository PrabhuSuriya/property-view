import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyViewMapComponent } from './property-view-map.component';

describe('PropertyViewMapComponent', () => {
  let component: PropertyViewMapComponent;
  let fixture: ComponentFixture<PropertyViewMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyViewMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyViewMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
