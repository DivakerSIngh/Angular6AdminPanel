import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuestionComponent } from './pages/question/question.component';

import { CmsComponent } from './pages/cms/cms.component';
import { LeftmenuComponent } from './component/leftmenu/leftmenu.component';


const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },
  {
    
    path: '',  component: LeftmenuComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'ads',  loadChildren: './pages/ads/ads.module#AdsModule',  },
      { path: 'cms', component: CmsComponent },
      { 
        path: 'support',
      loadChildren: './pages/support/support.module#SupportModule',  
    },
     
      {
        path: 'vendor',
        loadChildren: './pages/vendor/vendor.module#VendorModule',
      } ,
      {
        path: 'users',
        loadChildren: './pages/subadmin/subadmin.module#SubadminModule',
      } ,
      {
        path: 'account',
        loadChildren: './pages/account/account.module#AccountModule',
      }  
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
