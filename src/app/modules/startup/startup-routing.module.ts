import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent  } from "../startup/home/home.component";
import { ForgotComponent } from "../startup/forgot/forgot.component";
import {  LoginComponent} from "../startup/login/login.component";

const routes: Routes = [
  {
    path: '',  component: HomeComponent, children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot', component: ForgotComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartupRoutingModule { }

