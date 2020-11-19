import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class SesionStartedGuard implements CanActivate {

  constructor (
    private sesion: SesionService,
    private auth: AngularFireAuth,
    private rouer: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise( (resolve, reject) => {
      this.sesion.verificar().then( res => {
        if(!res){
          this.rouer.navigate(['login']);
          resolve(res);
        } else {
          resolve(res);
        }
      }).catch( () => {reject(false)});
    });
  }
  
}
