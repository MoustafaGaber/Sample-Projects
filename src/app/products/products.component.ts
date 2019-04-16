import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
title="products";
  constructor() { }

  ngOnInit() {
  }
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
  
  btnvalue: string="login";
  mytoggle: boolean= false;

  btnstyle="btn btn-primary"
  
  mytogglefuntion(){
    this.btnvalue=this.mytoggle ? "logout" : "login";
    this.btnstyle= this.mytoggle ? "btn btn-danger" : "btn btn-primary";
    
   }
  myfunction(){
    
    this.mytoggle=!this.mytoggle;
    this.mytogglefuntion()
    
 }
  
}
