import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
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

  constructor(private controlAlerta: AlertController, private serv: PeticionesService) { }

  ngOnInit() {
    this.controlEmail = new FormControl('', [
      Validators.minLength(3),
      Validators.required,
      Validators.email,
    ]);

    this.controlContrasenya = new FormControl(0, [
      Validators.required,
      Validators.minLength(7),
    ]);

    this.miFormulario = new FormGroup({
      controlEmail: this.controlEmail,
      controlContrasenya: this.controlContrasenya,
    });
  }

  comprobarValidacion() {
    let txtError = '';

    if (this.controlEmail.invalid && this.controlContrasenya.invalid)
      txtError = 'Ambos datos están mal introducidos.';
    else if (this.controlEmail.invalid)
      txtError = 'El email no está bien introducido.';
    else if (this.controlContrasenya.invalid)
      txtError = 'La contraseña tiene que tener mínimo 7 caracteres.';

    if (this.miFormulario.invalid) {
      this.controlAlerta
        .create({
          header: 'Error',
          message: txtError,
          buttons: ['Ok'],
        })
        .then((alerta) => {
          alerta.present();
        });
    } else {
      // this.serv.iniciarSesion(this.controlEmail.value, this.controlContrasenya.value).subscribe((res: UsuarioConToken) => {
      //   console.log(res);
      // }
      // );
    }
  }
}
