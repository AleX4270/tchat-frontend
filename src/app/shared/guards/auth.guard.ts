import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
      private readonly router: Router,
      private readonly userStoreService: UserStoreService
      ) {

      }
  
    canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
        const isUserLogged = this.userStoreService.getUser().token;

        if(!isUserLogged) {
            this.router.navigate(['/']);
        }
    
        return true;
  }
  
}
