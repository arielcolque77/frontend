import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl, FormGroup  } from '@angular/forms';
import { Notes } from 'src/app/models/note';
import { NoteService } from '../../../core/services/note.service';
import { ProyectoService } from '../../../core/services/proyecto.service';
import { NotifyService } from '../../../core/services/notify.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  noteForm: any;
  proyectos:any = [];

  note: Notes = new Notes;
  body:any = "";

  constructor(
    private fb: FormBuilder,
    private httpNote: NoteService,
    private httpProyect: ProyectoService,
    private _notify: NotifyService,
  ) { 
    this.noteForm = this.fb.group(this.note);
  }

  ngOnInit(): void {
    this.httpProyect.getProyectos().subscribe( data => {
      this.proyectos = data;
    }); 

  }

  createNote = () => {
    if (this.noteForm.invalid) {
      return;
    }
     this.httpNote.saveNote(this.noteForm.value).subscribe({
      next: data => {
        this._notify.success(data.message,'Done');
        this.noteForm.reset();
        this.noteForm.controls['proyect'].setErrors(null);
        this.noteForm.controls['description'].setErrors(null);
        this.noteForm.setErrors({ 'invalid': true });
      }, error: err=> {
        console.log(err)
      }
    });

  }

}
