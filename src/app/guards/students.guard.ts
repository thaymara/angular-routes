import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentsGuard implements CanActivateChild {
    constructor() { }

    canActivateChild(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot) : Observable<boolean> | boolean {
            console.log('AlunosGuard: Guarda de rota filha');

            if (state.url.includes('edit')){
              //  alert('Usuário sem acesso');
            }
            return true;
    }
}