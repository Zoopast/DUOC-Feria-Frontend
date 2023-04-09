import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productor } from '../productor';
@Component({
  selector: 'app-productores',
  templateUrl: './productores.component.html',
  styleUrls: ['./productores.component.css']
})
export class ProductoresComponent {

  productoresData: Productor[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      data['productores'].forEach((productor: any) => {
        console.log(productor);
        const new_productor = new Productor(productor[0], productor[1], productor[2], productor[3], productor[4], productor[5]);
        this.productoresData.push(new_productor);
      });
    });
  }

  nuevoProductor() {
    console.log('Nuevo productor');
  }

  editarProductor(productor: Productor) {

  }

  eliminarProductor(productor: Productor) {

  }
}
