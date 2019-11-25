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
import { PosteoDetailComponent } from './posteo-detail/posteo-detail.component';
import { ComentarioComponent } from './comentario/comentario.component';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';
import { PosteoSearchComponent } from './posteo-search/posteo-search.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthserviceService } from './servicios/authservice.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CategoriasComponent,
    DebugComponent,
    HomeComponent,
    NavbarComponent,
    UserlistComponent,
    PosteoComponent,
    PosteoDetailComponent,
    ComentarioComponent,
    ComentarioDetailComponent,
    PosteoSearchComponent,
    LoginComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
