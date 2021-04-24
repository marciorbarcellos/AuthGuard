import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private localStorageService: LocalStorageService) { }

  canActivate(): boolean {
    if(this.localStorageService.retrieve('user') && this.localStorageService.retrieve('user').valid){
      return true;
    }
    alert("not logged in");
    //redirect to not authorized page or login page
    return false;
  }
  canActivateChild(): boolean {
    if(this.localStorageService.retrieve('user') && this.localStorageService.retrieve('user').valid){
      return true;
    }
    alert("not allowed to view the child");
    //redirect to not authorized page or login page
    //this.route.navigate(['login']);
    return false;
  }
}
