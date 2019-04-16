import { Component } from '@angular/core';


//import { ProductsComponent } from './products/products.component';
@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent  {
  
  dayDate=Date();
  format='shortDate';

  name: string="safi";
  btnvalue="Full Date";
  toggle=false;
  mytogglefunc(){
    this.toggle=!this.toggle;
    this.format=this.toggle? 'fullDate' : 'shortDate';
    this.btnvalue=this.toggle? 'Short Date':'Full Date'
  }
    btnclass='btn btn-primary';
    btnvalue1='Login';
    mytoggle=false;
  btnfunction(){
    this.mytoggle=!this.mytoggle;
    this.btnclass=this.mytoggle? 'btn btn-danger' : 'btn btn-primary';
    this.btnvalue1=this.mytoggle? 'logout' : 'Login';    



  }
  constructor() { }

  ngOnInit() {
  }

}
