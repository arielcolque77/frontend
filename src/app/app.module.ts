import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import {AuthInterceptor} from './core/interceptors/auth.interceptor';/**interceptor*/ 

import { materialModule } from './material.module'; /**import the material*/

import { AppComponent } from './app.component';
import { NoteComponent } from './components/activities/note/note.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateNoteComponent } from './components/activities/createNote/create-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
//import { HeaderComponent } from './main/header/header.component';
//import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    //NoteComponent,
    //CreateNoteComponent,
    LoginComponent,
    //ProyectosComponent,
    //HeaderComponent,
    //MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
     provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
