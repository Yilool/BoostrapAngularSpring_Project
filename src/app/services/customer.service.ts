import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interface/custom';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  private customRoute: string;

  constructor( private http: HttpClient ) { 
    this.customRoute = 'http://localhost:8080/empresa/custom';
  }

  public postcustom(customParam: Customer) {
    return this.http.post<Customer>(this.customRoute, customParam, this.httpOptions);
  }

  public async getAllcustom(): Promise<any> {
    let customs: any = await this.http.get(this.customRoute).toPromise();

    return customs;
  }

  public async getcustom(prdId: number): Promise<any> {
    let custom: any = await this.http.get(this.customRoute + "/" + prdId).toPromise();

    return custom;
  }

  public async delcustom(prdId: number): Promise<any> {
    let custom: any = await this.http.delete(this.customRoute + "/" + prdId).toPromise();

    return custom;
  }
}
