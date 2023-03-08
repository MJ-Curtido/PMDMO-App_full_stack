import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-comprados',
  templateUrl: './comprados.page.html',
  styleUrls: ['./comprados.page.scss'],
})
export class CompradosPage implements OnInit {
  cursos: Curso[];

  constructor(private peticionesServ: PeticionesService) {
    this.cursos = [];
    this.peticionesServ.obtenerCursosComprados().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  ngOnInit() {
  }

}
