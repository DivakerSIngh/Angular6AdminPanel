import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class LoginAuthGuard implements CanActivate {
    constructor(public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        var token = localStorage.getItem('token');
        if (token) {
            this.router.navigate(['/home']);
            return false;
        } else {
            localStorage.removeItem("token");
            return true;
        }
    }
}

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        var token = localStorage.getItem('token');
        if (token) {
           // this.router.navigate(['/home']);
            return true;
        } else {
            this.router.navigate(['/login']);
            return true;
        }
    }
}
