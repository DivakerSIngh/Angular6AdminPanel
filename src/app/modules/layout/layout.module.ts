import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { SupportComponent } from './pages/support/support.component';
import { QuestionComponent } from './pages/question/question.component';
import { AdsComponent } from './pages/ads/ads.component';
import { CmsComponent } from './pages/cms/cms.component';
import { AdminuserComponent } from './pages/adminuser/adminuser.component';
import { LeftmenuComponent } from './component/leftmenu/leftmenu.component';
import { ErrorComponent } from './component/error/error.component';
import { PaginationComponent } from './component/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [DashboardComponent, AccountComponent, VendorComponent, SupportComponent, QuestionComponent, AdsComponent, CmsComponent, AdminuserComponent, LeftmenuComponent, ErrorComponent, PaginationComponent]
})
export class LayoutModule { }
