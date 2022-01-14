import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  template: `
  <div>
    <h2>Ajouter un utilisateur</h2>
    <section>
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="fill">
          <mat-label>prenom :</mat-label>
          <input type="text" matInput formControlName="prenom">
        </mat-form-field>
        <mat-form-field appearance="fill">
          <mat-label>nom :</mat-label>
          <input type="text" matInput formControlName="nom">
        </mat-form-field>
        <div class="text-center">
          <button mat-raised-button color="primary">Ajouter</button>
        </div>
      </form>
    </section>
  </div>
  `,
  styles: [`
  form {
    display : flex;
    justify-content : center;
    margin-top: 40px;
  }
  form > *+* {
    margin-left : 10px;
  }
  .text-center {
    text-align : center;
  }
  `
  ]
})
export class FormComponent implements OnInit {

  public form;
  public key : undefined | string;

  constructor(private fb : FormBuilder, private db : FirebaseService, private url : ActivatedRoute, private route : Router) {
    this.form = fb.group({
      nom : [],
      prenom : []
    })
   }

  ngOnInit(): void {
    this.url.params.subscribe( (params : any) => {
      this.key = params.key;
      if(params.key) {
      this.db.getOne(params.key).subscribe(
        (response : any) => {
          console.log(response);
          const [nom, prenom] = response;
          this.form = this.fb.group({
            nom : [nom],
            prenom : [prenom]
          })
        }
      )}
    })
  }

  onSubmit() {
    if(this.key) {
      const {nom, prenom} = this.form.value;
      this.db.update(this.key, prenom, nom).then( () => {
        this.route.navigate(["/admin"]);
      })
    } else {
      const {nom , prenom} = this.form.value;
      this.db.create({nom, prenom}).then( () => {
        this.form.reset();
      });
    }
  }

}
