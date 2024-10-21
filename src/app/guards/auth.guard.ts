import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    
    let user = localStorage.getItem('user');

    return new Promise((resolve) => {

        this.firebaseSvc.getAuth().onAuthStateChanged((auth) => {
          if(auth) {
            if (user) resolve(true);
          }
          else {
            this.firebaseSvc.signOut();
            resolve(false);
          }
        })
    });
  
  }
}
