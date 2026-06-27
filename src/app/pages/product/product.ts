import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { ApiService } from '../../api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule,Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
 
data:any = [];

constructor(private api:ApiService,private cdr:ChangeDetectorRef) {}

ngOnInit(){
  this.api.getAllproducts().subscribe((res:any)=>{
    this.data= res
    this.cdr.detectChanges()
  })
}
}