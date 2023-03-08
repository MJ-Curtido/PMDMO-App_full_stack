import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InfoUsuarioService } from 'src/app/services/info-usuario.service';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-mesa-cursos',
  templateUrl: './mesa-cursos.page.html',
  styleUrls: ['./mesa-cursos.page.scss'],
})
export class MesaCursosPage implements OnInit {
  protected miFormulario!: FormGroup;
  protected controlNombre!: FormControl;
  protected controlDesc!: FormControl;
  protected controlPrecio!: FormControl;

  constructor(
    private controlAlerta: AlertController,
    private peticionesServ: PeticionesService,
    private infoServ: InfoUsuarioService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.controlNombre = new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]);

    this.controlDesc = new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]);

    this.controlPrecio = new FormControl(0, [Validators.required]);

    this.miFormulario = new FormGroup({
      controlNombre: this.controlNombre,
      controlEmail: this.controlDesc,
      controlContrasenya: this.controlPrecio,
    });
  }

  crearCurso() {
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
      this.peticionesServ
        .crearCurso(
          this.controlNombre.value,
          this.controlDesc.value,
          this.controlPrecio.value,
        )
        .subscribe((res: Curso) => {
          this.router.navigate(['/menu-tab']);
        });
    }
  }
}
