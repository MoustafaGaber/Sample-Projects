import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  birthday: Date=new Date(2019,4,11);
  toggle=true;
  get format() {return this.toggle ? 'shortDate':'fullDate';}
  toggleFormat(){
    this.toggle=!this.toggle;
  }

}
