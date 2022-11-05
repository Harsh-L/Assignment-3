import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product: any = {};
  angForm: FormGroup;
  
  constructor(private route: ActivatedRoute, private router: Router, private fb:FormBuilder, private ps: ProductService) { 
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.nullValidator],
      price: ['', Validators.required],
      details: ['', Validators.required],
      seller: ['', Validators.required],
      images: [[''], Validators.required],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ps.editProduct(params['id']).subscribe(res => {
        this.product = res;
      })
    })
  }

  updateProduct(){
    this.ps.updateProduct(this.product._id,
      this.angForm.value.name, 
      this.angForm.value.description, 
      this.angForm.value.price, 
      this.angForm.value.details,
      this.angForm.value.seller);

      this.router.navigate(['/']);
  }
}
