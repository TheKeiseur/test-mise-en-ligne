import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './back/form.component';
import { GestionComponent } from './back/gestion.component';
import { ConnexionComponent } from './front/connexion/connexion.component';
import { HomeComponent } from './front/home.component';
import { NotAuthorizedComponent } from './front/not-authorized.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path : "connexion", component : ConnexionComponent},
  {path : "admin", component : GestionComponent, canActivate : [AuthGuardService]},
  {path : "admin/modif/:key", component : FormComponent, canActivate : [AuthGuardService]},
  {path : "erreur-401", component : NotAuthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
