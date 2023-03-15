import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'http://80.11.122.222:8000/polyfx/cgi/getart.cgi?frs=';
  private fournisseurId: string = '401000211'; //< !> ICI mettre votre fournisseur à vous !!
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  setFournisseur(fournisseur : number):void{
    this.fournisseurId = fournisseur + ''
  }

  getProducts(): Observable<Product[]> {
    // if (this.products.length>0){
    //   return this.products;
    // }
    return this.http.get<any>(this.productsUrl+this.fournisseurId);
  }
}
