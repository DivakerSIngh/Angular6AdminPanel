import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class LoginAuthGuard implements CanActivate {
    constructor(public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        debugger
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
