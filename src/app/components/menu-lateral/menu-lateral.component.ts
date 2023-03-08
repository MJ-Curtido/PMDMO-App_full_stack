import { Component, OnInit } from '@angular/core';
import { InfoUsuarioService } from 'src/app/services/info-usuario.service';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
})
export class MenuLateralComponent implements OnInit {

  constructor(private peticionesServ: PeticionesService, private serv: InfoUsuarioService) { }

  ngOnInit() {}

  cerrarSesion() {
    this.peticionesServ.cerrarSesion().subscribe(
      (res: any) => {
        console.log(res);
        this.serv.removeToken();
      }
    );
  }
}
