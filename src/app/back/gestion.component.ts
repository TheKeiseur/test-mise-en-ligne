import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gestion',
  template: `
    <h1>Gestion des utilisateurs</h1>

    <app-form></app-form>
    <hr>
    <table mat-table [dataSource]="dataSource">
      <ng-container matColumnDef="key">
        <th mat-header-cell *matHeaderCellDef> key. </th>
        <td mat-cell *matCellDef="let element"> {{element.key}} </td>
      </ng-container>
      <ng-container matColumnDef="nom">
        <th mat-header-cell *matHeaderCellDef> nom. </th>
        <td mat-cell *matCellDef="let element"> {{element.nom}} </td>
      </ng-container>
      <ng-container matColumnDef="prenom">
        <th mat-header-cell *matHeaderCellDef> prenom. </th>
        <td mat-cell *matCellDef="let element"> {{element.prenom}} </td>
      </ng-container>
      <ng-container matColumnDef="action">
        <th mat-header-cell *matHeaderCellDef> action. </th>
        <td mat-cell *matCellDef="let element">
          <button mat-raised-button (click)="onClickSuppr(element.key)">Supprimer</button>
          <button mat-raised-button (click)="onClickModif(element.key)">Modifier</button>
        </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [`
  table {
    width : 100%;
  }
  `
  ]
})
export class GestionComponent implements OnInit {

  public dataSource : Array<any> = [];
  public displayedColumns : string[] = ['key', 'prenom', 'nom', 'action'];

  constructor(private service : FirebaseService, private route : Router) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(response => this.dataSource = response);
  }

  public onClickSuppr(key : string) {
    this.service.delete(key);
  }

  public onClickModif(key : string) {
    this.route.navigate(["/admin/modif", key]);
  }

}
