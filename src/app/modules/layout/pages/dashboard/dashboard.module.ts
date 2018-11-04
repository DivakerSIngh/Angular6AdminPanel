import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

import { VendorDetailsChartComponent } from './vendor-details-chart/vendor-details-chart.component';
import { UserVendorChartComponent } from './user-vendor-chart/user-vendor-chart.component';
import { SubscriptionTicketChartComponent } from './subscription-ticket-chart/subscription-ticket-chart.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { MacroDataComponent } from './macro-data/macro-data.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  declarations: [DashboardComponent, VendorDetailsChartComponent, UserVendorChartComponent, SubscriptionTicketChartComponent, HeatMapComponent, MacroDataComponent]
})
export class DashboardModule {

  
 }
