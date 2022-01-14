import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-authorized',
  template: `
    <h1>Erreur 401</h1>
    <p>Veuillez vous connecter :</p>
    <p><a routerLink="/connexion">Page de connexion</a></p>
    
  `,
  styles: [
  ]
})
export class NotAuthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
