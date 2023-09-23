import { Component } from '@angular/core';
import { TableService } from '../table-booking.service';

@Component({
  selector: 'app-table-show',
  templateUrl: './table-show.component.html',
  styleUrls: ['./table-show.component.scss']
})
export class TableShowComponent {
  userName: any;
  bookingId: any;
  constructor(private tableService:TableService) {
  }

  
  ngOnInit(): void {
    //  this.tableService.dummyData.push(this.tableService.tableFormValues)
    console.log(this.tableService.tableFormValues,999,this.tableService.dummyData)
     this.tableService.tableFormValues.filter((v:any)=>{
      console.log(v,'0909')
      this.userName= v.Name
      this.bookingId = v.id
    })
    // this.userName=this.tableService.tableFormValues.Name
    // this.bookingId= this.tableService.tableFormValues.id
  }
}
