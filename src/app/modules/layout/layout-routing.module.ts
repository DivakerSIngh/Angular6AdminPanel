import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { QuestionComponent } from './pages/question/question.component';
import { AdsComponent } from './pages/ads/ads.component';
import { CmsComponent } from './pages/cms/cms.component';
import { AdminuserComponent } from './pages/adminuser/adminuser.component';
import { LeftmenuComponent } from './component/leftmenu/leftmenu.component';
import { SupportComponent } from './pages/support/support.component';

const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  {
    
    path: '',  component: LeftmenuComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'account', component: AccountComponent },
      { path: 'vendor', component: VendorComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'ads', component: AdsComponent },
      { path: 'cms', component: CmsComponent },
      { path: 'user', component: AdminuserComponent },
      { path: 'support', component: SupportComponent },
      { path: 'users', component: AdminuserComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
