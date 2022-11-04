import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  angForm : FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private fb:FormBuilder, private ps: ProductService) { 
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.nullValidator],
      price: ['', Validators.required],
      details: ['', Validators.required],
      seller: ['', Validators.required],
    })
  }

  insertPorduct(){
    this.ps.addProduct(this.angForm.value.name, 
      this.angForm.value.description, 
      this.angForm.value.price, 
      this.angForm.value.details,
      this.angForm.value.seller);

      this.router.navigate(['/']);

  }
  ngOnInit(): void {
  }

}
