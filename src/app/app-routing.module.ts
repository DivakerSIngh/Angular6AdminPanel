import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthGuard } from './services/login-auth-guard';


const appRoutes: Routes = [
  {
    //path: 'dashboard', canActivate: [DashboardGuard],
    path: 'home',
    loadChildren: './modules/layout/layout.module#LayoutModule'
  },
  {
    //path: 'dashboard', canActivate: [DashboardGuard],
    path: '',
    loadChildren: './modules/startup/startup.module#StartupModule',
    canActivate:[LoginAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
}
