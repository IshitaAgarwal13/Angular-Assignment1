import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {
  customerId:number=1909;
  customerName:string="Wills";
  customerEmail:string="wills@gmail.com";
  customerMobile:number=908997612;
  customerAge:number=56;
  customerGender:string='M';
  customerAddress:string="295- Clause Apartment,Vihar Nagar,Jaipur,India"

  constructor() { }

  ngOnInit(): void {
  }

}
