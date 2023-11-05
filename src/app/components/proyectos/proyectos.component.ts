import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../core/services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public listProyect:Array<any> = [];

  constructor(
    private httpProyect: ProyectoService,
  ) { }

  ngOnInit(): void {
    this.httpProyect.getProyectos().subscribe(data => {
      this.listProyect = data;
    });
  }

}
