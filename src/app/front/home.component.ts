import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'home',
  template: `

    <img alt="" appImage>
    <p appParagraph></p>
    <button appBtn></button>
    <h1 appTitre="false">Ceci est un titre</h1>
    <!-- <article *ngFor="let article of data.getArticles()">
      <h2>{{ article.titre | uppercase | titre:article.contenu }}</h2>
      <h3>{{ article.titre | titlecase | titre:article.contenu }}</h3>
      <p>Prix d'achat : {{ article.prix | currency:"EUR":"symbol":"2.2-2":"fr" }}</p>
      <p>{{ article.dt_publication | date:"dd/MM/yyyy" }}</p>
      <p>{{ article.dt_publication | date:"longDate" }}</p>
      <p>{{ article.dt_publication | date:"longDate":"CEST":"fr" }}</p>
      <p>{{ article.contenu | lasuite:20 }} <a routerLink="/admin">Lire la suite...</a></p>
    </article> -->

    <!-- <article *ngFor="let article of posts$ | async">
      <h2>{{ article.title }}</h2>
      <p>{{ article.body }}</p>
    </article> -->

    <!-- <article *ngFor="let article of articleComplet$ | async">
      <h2>{{article.title | titre: article.body}}</h2>
      <p>{{ article.body  }}</p>
      <h3>commentaires associés :</h3>
      <ul>
        <li *ngFor="let commentaire of article.commentaires">
          {{commentaire.name}} ------ {{ commentaire.body }}
        </li>
      </ul>
    </article> -->

    <article *ngFor="let user of articleCompletAvecAuteur$ | async">
      <h2>{{user.name}}</h2>
      <p>{{ user.username }}</p>
      <h3>articles associés :</h3>
      <ul>
        <li *ngFor="let article of user.articles">
          {{article.title}} ------ {{ article.body }}
        </li>
      </ul>
    </article>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public posts$ : Observable<any> | undefined;
  public articleComplet$   : Observable<any>  | undefined ;
  public articleCompletAvecAuteur$   : Observable<any>  | undefined ;

  constructor(public data : DataService) { }

  ngOnInit(): void {
    this.posts$ = this.data.getArticleFactices();
    this.articleComplet$ = this.data.articleComplete(); 
    this.articleCompletAvecAuteur$ = this.data.articleCompleteAvecAuteur();
  }


}
