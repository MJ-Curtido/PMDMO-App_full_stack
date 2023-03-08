import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-miscursos',
  templateUrl: './miscursos.page.html',
  styleUrls: ['./miscursos.page.scss'],
})
export class MiscursosPage implements OnInit {
  cursos: Curso[];

  constructor(private peticionesServ: PeticionesService) {
    this.cursos = [];
    this.peticionesServ.obtenerCursosComprados().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  ngOnInit() {
  }

  eliminarCurso(id: string) {
    this.peticionesServ.eliminarCurso(id).subscribe((data) => {
      console.log(data);
    });
  }
}
