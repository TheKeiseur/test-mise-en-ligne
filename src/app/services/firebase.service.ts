import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private table : string = "/clients";

  constructor(private db : AngularFireDatabase) { }

  public getAll() {
    return this.db.list(this.table).snapshotChanges().pipe(
      map( clients => clients.map(
        data => Object.assign({}, data.payload.val(), {key : data.key})
      ))
    )
  }

  public getOne(key : string) {
    return this.db.list(`${this.table}/${key}`).valueChanges();
  }

  public delete(key : string) {
    this.db.list(this.table).remove(key);
  }

  public create(data : {nom : string, prenom : string}) {
    return this.db.list(this.table).push(data);
  }

  public update(id : string, inputPrenom : string, inputNom : string) {
    return this.db.list(this.table).update(id, {nom : inputNom, prenom : inputPrenom});
  }
}
