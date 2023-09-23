import { Component } from '@angular/core';
import { FlightService } from '../flight-data.service';
@Component({
  selector: 'app-flight-page',
  templateUrl: './flight-page.component.html',
  styleUrls: ['./flight-page.component.scss'],
})
export class FlightPageComponent {
  constructor(private flightService:FlightService){

  }
  data = [
    {
      item: 'nokia',
      price: 6000,
    },
    {
      item: 'sumsaung',
      price: 9000,
    },
    {
      item: 'redmi',
      price: 63000,
    },
    {
      item: 'poco',
      price: 16000,
    },
    {
      item: 'nothing',
      price: 26000,
    },
    {
      item: 'iphone',
      price: 36000,
    },
    {
      item: 'nokia12',
      price: 76000,
    },
  ];
  selectedPrice: any;
  selectprice: any;
  data2: any;
  amout: any;
  dummyData: any;
  ngOnInit() {
    console.log(this.data);
    this.data2 = this.data
   let v = this.flightService.flightData()
   console.log(v,'65656')
  }
  price() {
    let b: any = []
    this.selectedPrice = this.selectprice
    let value = Number(this.amout.split('-')[0])
    let value2 = Number(this.amout.split('-')[1])
    let dummy = this.data2?.filter((v: any) => {
      if (v.price >= value && v.price <= value2) {
        b.push(v)
        console.log(b, '0000')
        this.dummyData = b
      }

    })
    this.data = this.dummyData
    // this.data =this.dummyData
    console.log(value, value2, dummy);
  }
}
