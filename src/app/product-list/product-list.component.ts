import { Component } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../products';
import { fournisseurs } from '../fournisseur';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  
  fournisseurs = [...fournisseurs];
  products : Product[]=[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    let fournisseur : number = 401000211;
    this.productService.getProducts(fournisseur.toString()).subscribe(data => this.products = data);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onClickFournisseur(fournisseur : number){
    console.warn("test");
    this.productService.getProducts(fournisseur.toString()).subscribe(data => this.products = data);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
