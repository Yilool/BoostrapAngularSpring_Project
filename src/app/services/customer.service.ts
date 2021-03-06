import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  
  // Custom entity-class CRUD path
  private customRoute: string;

  constructor( private http: HttpClient ) { 
    this.customRoute = 'http://localhost:8080/empresa/custom';
  }

  // Create Custom
  public postcustom(customParam: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customRoute, customParam, this.httpOptions);
  }
  
  // Read All Custom
  public async getAllcustom(): Promise<any> {
    let customs: any = await this.http.get(this.customRoute).toPromise();
    
    return customs;
  }
  
  // Read Custom
  public async getcustom(cusId: number): Promise<any> {
    let custom: any = await this.http.get(this.customRoute + "/" + cusId).toPromise();
    
    return custom;
  }
  
  // Delete Custom
  public delcustom(cusId: number): Observable<Customer> {
    let custom: any = this.http.delete(this.customRoute + "/" + cusId, { responseType: 'text' });
    
    return custom;
  }
}
