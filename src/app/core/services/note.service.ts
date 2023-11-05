import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private http:HttpClient
  ) { }
  
  saveNote(form:any):Observable<any> {
    return this.http.post(`${environment.apiURL}/saveNote`, form);
  }
  
  getNotes():Observable<any>{
    return this.http.get(`${environment.apiURL}/getNotes`);
  }
  
  findProyecto(idproyecto:number):Observable<any>{
    return this.http.post(`${environment.apiURL}/findProyecto`, {
      idproyecto
    });
  }

  findProyectoNotes(idproyecto:number):Observable<any>{
    return this.http.get(`${environment.apiURL}/finNotesOfProyects/${idproyecto}`);
  }
  
  updateNote(idnote:number):Observable<any>{
    return this.http.post(`${environment.apiURL}/updateStatusNote`,{
      idnote
    });
  }

  downNote(idnote:number):Observable<any>{
    return this.http.delete(`${environment.apiURL}/deleteNote/${idnote}`);
  }

}
