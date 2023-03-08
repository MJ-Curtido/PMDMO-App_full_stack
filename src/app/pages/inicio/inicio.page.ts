import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InfoUsuarioService } from 'src/app/services/info-usuario.service';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  protected miFormulario!: FormGroup;
  protected controlEmail!: FormControl;
  protected controlContrasenya!: FormControl;

  constructor(private controlAlerta: AlertController, private peticionesServ: PeticionesService, private infoServ: InfoUsuarioService, private router: Router) { }

  ngOnInit() {
    this.controlEmail = new FormControl('', [
      Validators.minLength(3),
      Validators.required,
      Validators.email,
    ]);

    this.controlContrasenya = new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]);

    this.miFormulario = new FormGroup({
      controlEmail: this.controlEmail,
      controlContrasenya: this.controlContrasenya,
    });
  }

  comprobarValidacion() {
    if (this.miFormulario.invalid) {
      this.controlAlerta
        .create({
          header: 'Error',
          message: 'Alguno de los datos no es correcto.',
          buttons: ['Ok'],
        })
        .then((alerta) => {
          alerta.present();
        });
    } else {
      this.peticionesServ.iniciarSesion(this.controlEmail.value, this.controlContrasenya.value).subscribe(
        (res: UsuarioConToken) => {
        this.infoServ.setToken(res.token);

        this.router.navigate(['/menu-tab']);
      }
      );
    }
  }
}
