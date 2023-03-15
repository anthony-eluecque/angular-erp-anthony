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
    this.productService.getProducts().subscribe(data => this.products = data);
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onClickFournisseur(fournisseur : number){
    this.productService.setFournisseur(fournisseur);
    this.productService.getProducts().subscribe(data => this.products = data);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
