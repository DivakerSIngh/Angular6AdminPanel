import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartupRoutingModule } from './startup-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import {  FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StartupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  
  declarations: [HomeComponent, LoginComponent, ForgotComponent],
  exports: [ReactiveFormsModule,FormsModule]
})
export class StartupModule { }
