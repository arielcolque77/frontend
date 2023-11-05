import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../core/services/note.service';
import { NotifyService } from '../../../core/services/notify.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes:any = [];
  resuelto:any [] = [];
  pendiente:any[] = [];

  constructor(
    private httpNote: NoteService,
    private router: ActivatedRoute,
    private _notify: NotifyService,
  ) { }

  ngOnInit(): void {
    this.getAllrecords();
  }

  getAllrecords = () => {
    let idproyecto = this.router.snapshot.paramMap.get("proyectoId");

    this.httpNote.findProyectoNotes(Number(idproyecto)).subscribe(data => {
      let resuelto = data;
      this.resuelto= resuelto.filter((r:any) => r.status_activity == "resolved_activity");
      this.pendiente = resuelto.filter((r:any) => r.status_activity == "pending_activity");
    });
  }

  updateNote = (idnote:number) => {
    console.log(idnote);
    this.httpNote.updateNote(idnote).subscribe({
      next:data => {
        this.getAllrecords();
        this._notify.success(data.message,'Done');
      },
      error: error => {
        console.log("The was an error!", error);
      }
    });
  }

  downNote = (idnote:number) => {
    this.httpNote.downNote(idnote).subscribe({
      next:data => {
        this._notify.success(data.message,'Done');
        this.getAllrecords();
      },error: error => {console.log(error);}
    });
  }

}
