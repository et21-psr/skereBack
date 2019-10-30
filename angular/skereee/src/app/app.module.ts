import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PosteosComponent } from './posteos/posteos.component';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CategoriasComponent,
    PosteosComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
