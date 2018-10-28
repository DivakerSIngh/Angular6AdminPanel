import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubadminListComponent } from './subadmin-list/subadmin-list.component';
import { AddSubadminComponent } from './add-subadmin/add-subadmin.component';
import { CmsComponent } from '../cms/cms.component';


const routes: Routes = [
  {
    path: '',  component:SubadminListComponent},
    {path: 'add',  component:AddSubadminComponent,
  }
];

@NgModule({
  imports:  [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubAdminRoutingModule { }
