import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InfoUsuarioService } from 'src/app/services/info-usuario.service';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  protected miFormulario!: FormGroup;
  protected controlNombre!: FormControl;
  protected controlEmail!: FormControl;
  protected controlContrasenya!: FormControl;
  protected controlTelefono!: FormControl;

  constructor(
    private controlAlerta: AlertController,
    private peticionesServ: PeticionesService,
    private infoServ: InfoUsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.controlNombre = new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]);

    this.controlEmail = new FormControl('', [
      Validators.minLength(3),
      Validators.required,
      Validators.email,
    ]);

    this.controlContrasenya = new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]);

    this.controlTelefono = new FormControl('', [
      Validators.required,
      Validators.pattern('^\\d{9}$'),
    ]);

    this.miFormulario = new FormGroup({
      controlNombre: this.controlNombre,
      controlEmail: this.controlEmail,
      controlContrasenya: this.controlContrasenya,
      controlTelefono: this.controlTelefono,
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
      this.peticionesServ.registro(this.controlNombre.value, this.controlEmail.value, this.controlContrasenya.value, this.controlTelefono.value).subscribe(
        (res: UsuarioConToken) => {
        this.infoServ.setToken(res.token);

        this.router.navigate(['/menu-tab']);
      }
      );
    }
  }
}
