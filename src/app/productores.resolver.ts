import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { ProductoresService } from './productores.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoresResolver implements Resolve<any> {

  constructor(private productoresService: ProductoresService) { }

  resolve() {
    return this.productoresService.getProductores();
  }
}
