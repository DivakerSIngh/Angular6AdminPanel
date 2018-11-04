import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTicketChartComponent } from './subscription-ticket-chart.component';

describe('SubscriptionTicketChartComponent', () => {
  let component: SubscriptionTicketChartComponent;
  let fixture: ComponentFixture<SubscriptionTicketChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionTicketChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionTicketChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
