import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable()
export class AuthService {

    private autenticateUser: boolean = false;
    showMenuEmitter = new EventEmitter<boolean>();

    constructor(private router: Router) { }

    doLogin(user: User){
        if(user.name === 'user@email.com' && user.password == '123456'){
            
            this.autenticateUser = true;
            this.showMenuEmitter.emit(true);
            this.router.navigate(['/']);
        }else{
            this.autenticateUser = false;
            this.showMenuEmitter.emit(false);
        }
    }

    userAutenticate(){
        return this.autenticateUser;
    }
}