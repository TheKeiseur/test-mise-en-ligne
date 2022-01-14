import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  public canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.auth.logged$.subscribe( response => response )
    if(localStorage.getItem("isLogged")){
      return true;
    }
    this.router.navigate(["/erreur-401"])
    return false;
  }

  constructor(private auth : AuthService, private router : Router) { }
}
