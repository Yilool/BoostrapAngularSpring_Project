import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productFormContent: FormGroup;
  products: Product[];
  product: Product;
  loading: boolean

  constructor(private formBuilder: FormBuilder, private prdService: ProductService) {
    this.product = {
      prdName: null,
      prdPrice: null,
    };
    this.loading = true;
  }

  ngOnInit(): void {
    this.productFormContent = this.formBuilder.group({
      id: [''],
      nombre: [''],
      precio: [''],
    });
  }

  // Product CRUD calling service method which use endpoint for get and give data

  //Create product function
  onPost() {
    this.product.prdName = this.productFormContent.get('nombre').value;
    this.product.prdPrice = +this.productFormContent.get('precio').value;
    
    this.prdService.postProduct(this.product).subscribe((response) => {
      alert('Producto creado!');
      console.log(response);
    });
    
    this.loading = false;
    this.productFormContent.reset();
  }
  
  
  //Get all product function
  async onGets() {
    this.products = await this.prdService.getAllProduct()
    this.loading = false;
    this.productFormContent.reset();
  }
  
  //Get product function by id
  async onGet() {
    let id = this.productFormContent.get('id').value
    this.product = await this.prdService.getProduct(id);
    this.loading = false;
    this.productFormContent.reset();
  }
  
  //Delete product function by id
  onDel() {
    let id = this.productFormContent.get('id').value
    let res = confirm(`¿Seguro que desea borrar el producto con id ${id}?`);

    if (res) {
      this.prdService.delProduct(id).subscribe((response) => {
      alert('!Producto Borrado!');
      console.log(response);
    });
    } else {
      alert('!Operación cancelada!');
    }
    
    this.loading = false;
    this.productFormContent.reset();
  }
}
