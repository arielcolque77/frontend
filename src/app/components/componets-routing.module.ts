import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateNoteComponent } from './activities/createNote/create-note.component';
import { NoteComponent } from './activities/note/note.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import {MainComponent} from '../main/main.component';

import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [

  //{path:'',redirectTo:'login', pathMatch:'full'},
  //{path:'**',redirectTo:'login', pathMatch:'full'},
  {
    path:'', component:MainComponent,
    children: [
    {path:'',component:DashboardComponent},
    {path:'note/:proyectoId',component:NoteComponent},
    {path:'createNote', component: CreateNoteComponent},
    {path:'proyectos', component:ProyectosComponent}
    ],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponetsRoutingModule { }
