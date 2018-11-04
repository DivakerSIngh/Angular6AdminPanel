import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDetailsChartComponent } from './vendor-details-chart.component';

describe('VendorDetailsChartComponent', () => {
  let component: VendorDetailsChartComponent;
  let fixture: ComponentFixture<VendorDetailsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDetailsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDetailsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
