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

  constructor(private formBuilder: FormBuilder, private cusService: CustomerService) {
    this.custom = {
      cusName: null,
      cusSurname: null,
    };
    this.loading = true;
  }

  ngOnInit(): void {
    this.customFormContent = this.formBuilder.group({
      id: [''],
      nombre: [''],
      apellido: [''],
    });
  }

  onPost() {
    this.custom.cusName = this.customFormContent.get('nombre').value;
    this.custom.cusSurname = this.customFormContent.get('apellido').value;
    
    console.log(this.custom);
    
    this.cusService.postcustom(this.custom)
    alert('!Cliente Creado!');
    this.loading = false;
    this.customFormContent.reset();
  }
  

  async onGets() {
    this.customers = await this.cusService.getAllcustom();
    console.log(this.customers)
    this.loading = false;
  }

  async onGet() {
    let id = this.customFormContent.get('id').value
    this.custom = await this.cusService.getcustom(id);
    console.log(this.custom)
    this.loading = false;
  }

  async onDel() {
    let id = this.customFormContent.get('id').value
    alert(`¿Seguro que desea borrar el cliente con id ${id}?`);
    this.custom = await this.cusService.delcustom(id);
    alert('!Cliente Borrado!');
    console.log(this.custom)
    this.loading = false;
  }
}
