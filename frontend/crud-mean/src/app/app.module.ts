import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // FormsModule: esta referencia siempre va, independiente el framework de front utilizado (boostrap, matrial, otros). ReactiveFormsModule: se referencia para que funciones junto con el Interceptor
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrearComponent } from './crear/crear.component';

import { CursosService } from './service/cursos.service';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CursosService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
