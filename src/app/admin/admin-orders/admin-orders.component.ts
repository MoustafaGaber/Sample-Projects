import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dayDate=new Date(2019,4,14);
  format="shortDate"
btnvalue="login";
btnclass="btn btn-primary";
toggle=false;
textvalue=""
function(){
  this.toggle=!this.toggle;
  this.btnvalue=this.toggle? "logout" : "login";
  this.btnclass=this.toggle? "btn btn-danger" : "btn btn-primary";
  this.format=this.toggle? "fullDate" : "shortDate";
}
}
