import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  selectPaymentMethodName='';
  selectedPaymentMethod=new FormControl('0');

  constructor(){}
  ngOnInit(): void{
    this.selectedPaymentMethod.valueChanges.subscribe((res:any)=>{
    if(res=='0') this.selectPaymentMethodName='';
    else this.selectPaymentMethodName=res.toString();
    });
  }
}
