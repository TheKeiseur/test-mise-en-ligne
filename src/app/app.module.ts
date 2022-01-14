import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ConnexionModule } from './front/connexion/connexion.module';

import { GestionModule } from './back/gestion.module';

import { CoreModule } from './core/core.module';

import { PartageModule } from './partage/partage.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu.component';
import { HomeComponent } from './front/home.component';
import { NotAuthorizedComponent } from './front/not-authorized.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    ConnexionModule,
    AppRoutingModule,
    CoreModule,
    GestionModule,
    HttpClientModule,
    PartageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
