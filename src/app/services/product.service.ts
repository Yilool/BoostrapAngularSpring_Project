import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  private productRoute: string;

  constructor( private http: HttpClient ) { 
    this.productRoute = 'http://localhost:8080/empresa/product';
  }

  public postProduct(productParam: Product): Observable<Product> {
    return this.http.post<Product>(this.productRoute, productParam, this.httpOptions);
  }

  public async getAllProduct(): Promise<any> {
    let products: any = await this.http.get(this.productRoute).toPromise();

    return products;
  }

  public async getProduct(prdId: number): Promise<any> {
    let product: any = await this.http.get(this.productRoute + "/" + prdId).toPromise();

    return product;
  }

  public async delProduct(prdId: number): Promise<any> {
    let product: any = await this.http.delete(this.productRoute + "/" + prdId).toPromise();

    return product;
  }
}
