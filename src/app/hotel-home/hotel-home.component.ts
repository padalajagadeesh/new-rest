import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel-home',
  templateUrl: './hotel-home.component.html',
  styleUrls: ['./hotel-home.component.scss']
})
export class HotelHomeComponent {
flightBoolean: boolean =false;


ngOnInit() {
  let value = window.location.href
  if(value.includes('flight')){
    this.flightBoolean = true;
  }
}

}
