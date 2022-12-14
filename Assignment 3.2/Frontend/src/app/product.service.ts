import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    uri = 'http://localhost:8000/shopping_cart.in';

    constructor(private http: HttpClient) { }

    getProduct(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.uri}/`);
    }

    addProduct(name: String, description: String, price: Number, details: String, seller: String){
        const obj = {
            name: name,
            description: description,
            price: price,
            details: details,
            seller: seller,
        };
        console.log(obj);
        
        this.http.post(`${this.uri}/insert`, obj).subscribe(res => console.log('Inserted'));
    }

    editProduct(id: any){
        return this.http.get(`${this.uri}/update/${id}`);
    }

    updateProduct(id: any, name: String, description: String, price: Number, details: String, seller: String){
        const obj = {
            name: name,
            description: description,
            price: price,
            details: details,
            seller: seller,
        };

        this.http.put(`${this.uri}/update/${id}`, obj).subscribe(res => console.log('Updated'));
    }

    deleteProduct(id: any){
        this.http.delete(`${this.uri}/delete/${id}`, id).subscribe(res => console.log('Deleted'));
    }

}