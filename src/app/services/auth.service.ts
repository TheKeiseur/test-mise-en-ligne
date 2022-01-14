import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logged$ = new Subject<boolean>();

  constructor(private auth : AngularFireAuth, private router : Router) { }

  public login(email : string, password : string) {
    this.auth.signInWithEmailAndPassword(email.trim() , password.trim()) 
    .then( () => 
      {
        this.logged$.next(true);
        localStorage.setItem("isLogged", email); 
        this.router.navigate(["/admin"]);
      }
    
    )
    .catch( ex => console.log(ex.message))
  }

  public loggout() {
    this.logged$.next(false);
    localStorage.removeItem("isLogged"); 
    this.router.navigate(["/connexion"]);
  }
}
