import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  cursos: Curso[];

  constructor(private peticionesServ: PeticionesService) {
    this.cursos = [];
    this.peticionesServ.obtenerCursosComprados().subscribe((cursos) => {
      this.cursos = cursos;
    });
  }

  ngOnInit() {
  }

  comprarCurso(id: string) {
    this.peticionesServ.comprarCurso(id).subscribe((data) => {
      console.log(data);
    });
  }
}
