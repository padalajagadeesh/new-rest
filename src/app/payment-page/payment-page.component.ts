import { Component } from '@angular/core';
import { TableService } from '../table-booking.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent {
  date: any;
  time: any;
  name='TableName'
  tableNumber: any;
  amount: any;
  totalAmount: any;
  userName: any;
  bookingId: any;
  constructor(private tableService:TableService,private route:Router,private http: HttpClient) {
  }
  ngOnInit(): void {
    this.tableService.tableFormValues.filter((v:any)=>{
      console.log(v,'0909')
      this.userName= v.Name
      this.bookingId = v.id
    })
    let startAmount = this.getRndInteger(100,300)
    let lastAmount = this.getRndInteger(100,300)
   this.amount=   this.tableService.newData?.Time < '12:00' ? startAmount:lastAmount;
   let v= new Date()
   this.date = v.toLocaleDateString();
   this.time =v.toLocaleTimeString();
   this.tableNumber= this.getRndInteger(1,20)
   this.totalAmount = (this.amount/100)*10 
   this.totalAmount = Number(this.totalAmount) + Number(this.amount)
  }
  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
