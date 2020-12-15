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
  

  async onGets() {
    this.products = await this.prdService.getAllProduct()
    this.loading = false;
    this.productFormContent.reset();
  }

  async onGet() {
    let id = this.productFormContent.get('id').value
    this.product = await this.prdService.getProduct(id);
    this.loading = false;
    this.productFormContent.reset();
  }

  onDel() {
    let id = this.productFormContent.get('id').value
    alert(`¿Seguro que desea borrar el producto con id ${id}?`);
    this.prdService.delProduct(id).subscribe((response) => {
      alert('!Producto Borrado!');
      console.log(response);
    });
    this.loading = false;
    this.productFormContent.reset();
  }
}
