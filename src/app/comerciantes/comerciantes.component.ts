import { Component } from '@angular/core';
import  { Comerciante } from '../comerciante';
@Component({
  selector: 'app-comerciantes',
  templateUrl: './comerciantes.component.html',
  styleUrls: ['./comerciantes.component.css']
})
export class ComerciantesComponent {
  comerciantesData: Comerciante[] = [];

  nuevoComerciante() {}
  editarComerciante(comerciante: Comerciante) {}
  eliminarComerciante(comerciante: Comerciante) {}
}
