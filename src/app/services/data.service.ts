import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private articles = [
  ]

  constructor(private http : HttpClient) { }

  public getArticles() {
    return this.articles;
  }

  public getArticleFactices() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  public articleComplete() {
    const articles$ = this.getArticleFactices();
    const commentaires$ = this.http.get("https://jsonplaceholder.typicode.com/comments");
    
    return (combineLatest([articles$ , commentaires$]) as Observable<Array<any>>)
    .pipe(
      map( ( [articles , commentaires])  => {
        return articles.map( (article : any) => Object.assign({} , article , { commentaires : commentaires.filter( (commentaire : any) => commentaire.postId == article.id ) }  ) )
      })
    )
  }

  public articleCompleteAvecAuteur() {
    const articles$ = this.getArticleFactices();
    const users$ = this.http.get("https://jsonplaceholder.typicode.com/users");

    return (combineLatest([users$, articles$]) as Observable<Array<any>>)
    .pipe(
      map( ( [users , articles])  => {
        return users.map( (user : any) => Object.assign({} , user , { articles : articles.filter( (article : any) => article.userId == user.id ) }  ) )
      })
    )
  }
}
