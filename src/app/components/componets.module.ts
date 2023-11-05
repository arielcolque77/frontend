import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponetsRoutingModule } from './componets-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { materialModule } from '../material.module';//import the material angular

import {MainComponent} from '../main/main.component';
import { HeaderComponent } from '../main/header/header.component'
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NoteComponent } from './activities/note/note.component';
import { CreateNoteComponent } from './activities/createNote/create-note.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ProyectosComponent,
    NoteComponent,
    CreateNoteComponent,
    DashboardComponent,

  ],
  imports: [
    CommonModule,
    ComponetsRoutingModule,
    materialModule,
    ReactiveFormsModule,

  ]
})
export class ComponetsModule { }
