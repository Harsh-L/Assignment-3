import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  products: any = [];

  constructor(private service: ProductService, private routes:Router) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe((product: Product[]) => {
      this.products = product;
    })
  }
  
}
