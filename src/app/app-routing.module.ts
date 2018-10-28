import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthGuard,AuthGuard } from './services/login-auth-guard';


const appRoutes: Routes = [
  {
    //path: 'dashboard', canActivate: [DashboardGuard],
    path: 'home',
    loadChildren: './modules/layout/layout.module#LayoutModule',
    canActivate:[AuthGuard]
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
