import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  singleproduct: any;
  id:any;

  constructor(private api:ApiService,private cdr: ChangeDetectorRef,private ar:ActivatedRoute){}

  ngOnInit(){
  this.id=this.ar.snapshot.params['id'];
  this.api.getproductdetails(this.id).subscribe((res:any)=>{
  this.singleproduct = res;
    this.cdr.detectChanges()
  })

  }
}
