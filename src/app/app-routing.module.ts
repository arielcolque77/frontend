import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';

import {NoteComponent} from './components/activities/note/note.component';
import {CreateNoteComponent} from './components/activities/createNote/create-note.component';
import {ProyectosComponent} from './components/proyectos/proyectos.component';

import {AuthGuard} from './core/guards/auth.guard';

const appRoutes: Routes = [
  //{path:'',redirectTo:'login', pathMatch:'full'},
  {path:'', canActivate:[AuthGuard],
  loadChildren: () => import('./components/componets.module').then(m => m.ComponetsModule)},
  {path:'**',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  //{path:'note/:proyectoId',component:NoteComponent},
  //{path:'createNote', component: CreateNoteComponent},
  //{path:'proyectos', component:ProyectosComponent}
];


@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(
      appRoutes
    ),
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
