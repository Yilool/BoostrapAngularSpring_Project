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
  
  // Product entity-class CRUD path
  private productRoute: string;

  constructor( private http: HttpClient ) { 
    this.productRoute = 'http://localhost:8080/empresa/product';
  }

  // Create Product
  public postProduct(productParam: Product): Observable<Product> {
    return this.http.post<Product>(this.productRoute, productParam, this.httpOptions);
  }
  
  // Read All Product
  public async getAllProduct(): Promise<any> {
    let products: any = await this.http.get(this.productRoute).toPromise();
    
    return products;
  }
  
  // Read Product
  public async getProduct(prdId: number): Promise<any> {
    let product: any = await this.http.get(this.productRoute + "/" + prdId).toPromise();

    return product;
  }
  
  // Delete Custom
  public delProduct(prdId: number): Observable<Product> {
    let product: any = this.http.delete(this.productRoute + "/" + prdId, { responseType: 'text' });
    
    return product;
  }
}
