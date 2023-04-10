import { Component } from '@angular/core';
import  { Comerciante } from '../comerciante';
import { ComercianteService } from '../comerciante.service';
@Component({
  selector: 'app-comerciantes',
  templateUrl: './comerciantes.component.html',
  styleUrls: ['./comerciantes.component.css']
})
export class ComerciantesComponent {
  comerciantesData: Comerciante[] = [];

  constructor(private comercianteService: ComercianteService) {
    this.comercianteService.getComerciantes().subscribe((response: any) => {
      console.log(response);
      response.forEach((comerciante: any) => {
        this.comerciantesData.push(
          new Comerciante(
            comerciante[0],
            comerciante[1],
            comerciante[2],
            comerciante[3],
            comerciante[4],
            comerciante[5]
        ));
      });
    });
  }


  nuevoComerciante() {}
  editarComerciante(comerciante: Comerciante) {}
  eliminarComerciante(id_comerciante: number) {
    this.comercianteService.deleteComerciante(id_comerciante).subscribe((response: any) => {
      console.log(response);
      window.location.href = '/comerciantes';
    });
  }
}
