import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdslistComponent } from '../ads/adslist/adslist.component';
import { AdsDetailsComponent } from '../ads/ads-details/ads-details.component';

const routes: Routes = [
  {
    path: '',  component:AdslistComponent},
    {path: 'adsdetails/:id',  component:AdsDetailsComponent},
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsRoutingModule { }
