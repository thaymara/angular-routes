import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) : Observable<boolean> | boolean{
        console.log('AuthGuard');

        return this.verifyAccess();
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean{
        console.log('canLoad: verificando se usuário pode carregar o cod módulo');
        return this.verifyAccess();
    }

    private verifyAccess(){
        if(this.authService.userAutenticate()){
            return true;
        }

        this.router.navigate(['/login']);

        return false;
    }
}