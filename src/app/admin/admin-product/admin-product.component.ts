
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  myDate=new Date(2019,4,14);
  format="shortDate";
  toggle=false;
  btnvalue="Login";
  btnclass="btn btn-primary";
  textvalue="";
  function(){
    this.toggle=!this.toggle;
    this.btnvalue=this.toggle? "LogOut" : "Login";
    this.btnclass=this.toggle? "btn btn-danger" : "btn btn-primary";
    this.format=this.toggle? "fullDate" : "shortDate";
  }
}
