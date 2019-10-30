import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './categorias/categorias.component';

import { HttpClientModule } from '@angular/common/http';
import { DebugComponent } from './debug/debug.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserlistComponent } from './userlist/userlist.component';
import { PosteoComponent } from './posteo/posteo.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    DebugComponent,
    HomeComponent,
    NavbarComponent,
    UserlistComponent,
    PosteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
