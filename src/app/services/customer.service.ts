import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../interface/custom';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customRoute: string;

  constructor( private http: HttpClient ) { 
    this.customRoute = 'http://localhost:8080/empresa/';
  }

  public postcustom(customParam: Customer) {
    return this.http.post<Customer>(this.customRoute, customParam);
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
