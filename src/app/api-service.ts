import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
}
)
export class ApiService {
    constructor(private http:HttpClient){}
    getAllproducts(){

return this.http.get("https://fakestoreapi.com/products")
}
getproductdetails(id: any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
}

}