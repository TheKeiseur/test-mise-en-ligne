import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'menu',
  template: `
    <nav>
      <h1>{{title}}</h1>
      <ul>
        <li><a routerLink="/" routerLinkActive="actif" [routerLinkActiveOptions]="{exact : true}">Accueil</a></li>
        <li *ngIf="!show"><a routerLink="/connexion" routerLinkActive="actif">Connexion</a></li>
        <li *ngIf="show"><a routerLink="/admin" routerLinkActive="actif">Gestion</a></li>
        <li *ngIf="show"><a href="#" (click)="onClickLoggout($event)">Déconnexion</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
    nav, ul {
      display: flex;
      align-items : center;
    }
    ul {
      list-style : none;
    }
    ul > *+* {
      margin-left : 20px;
    }
    `
  ]
})
export class MenuComponent implements OnInit {

  public show : boolean = false;

  @Input() title : string = "";

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLogged")) {
      this.show = true;
    }
    this.auth.logged$.subscribe( response => {this.show = response;
    console.log(response);
    });
  }

  public onClickLoggout($event : Event) {
    $event.preventDefault();
    this.auth.loggout();
  }

}
