import { Component } from '@angular/core';
import { TableService } from '../table-booking.service';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.scss']
})
export class TableStatusComponent {
  id: any;
  userName: any;
  timeing: any;
  date: any;
  hide: boolean= true;
  flightBoolean :boolean =false
  constructor(private tableService:TableService) {
  }

  ngOnInit() {
    let value = window.location.href
    if(value.includes('flight')){
      this.flightBoolean = true;
    }
  }
  SearchId(){
console.log('00',this.tableService.tableFormValues)
this.userName=''
this.timeing = ''
this.date =''
this.tableService.dummyData.filter((v:any)=>{
  console.log(v.datePick,this.id,999,v.id,v.id === Number(this.id))
  if(v.id === Number(this.id) ){
    this.hide = false
    console.log('45')
    this.userName=v.Name
    this.timeing = v.Time.toLocaleString()
    this.date =v.datePick?v.datePick.toLocaleDateString():v.date
  }else{
    console.log('5545')
    this.hide =true
  }
})
this.id=''
  }
}
