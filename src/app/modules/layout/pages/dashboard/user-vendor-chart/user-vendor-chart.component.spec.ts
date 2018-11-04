import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVendorChartComponent } from './user-vendor-chart.component';

describe('UserVendorChartComponent', () => {
  let component: UserVendorChartComponent;
  let fixture: ComponentFixture<UserVendorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserVendorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVendorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
