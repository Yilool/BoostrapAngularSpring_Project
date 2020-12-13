import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/interface/custom';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customFormContent: FormGroup;
  customers: Customer[];
  custom: Customer;
  loading: boolean

  constructor(private formBuilder: FormBuilder, private cusService: CustomerService) {}

  ngOnInit(): void {
    this.customFormContent = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellido: [''],
    });
  }
}
