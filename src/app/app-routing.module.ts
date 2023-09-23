import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { TableShowComponent } from './table-show/table-show.component';
import { TableStatusComponent } from './table-status/table-status.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { HomeComponent } from './home/home.component';
import { BusPageComponent } from './bus-page/bus-page.component';
import { TrainPageComponent } from './train-page/train-page.component';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';


const routes: Routes = [
  // {path:'tableBooking',component:TableBookingComponent},
  {path:'tableShow',component:TableShowComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'hotelHOme', component: HotelHomeComponent },
      { path: 'tableStatus', component: TableStatusComponent },
      { path: 'tableBooking', component: TableBookingComponent },
    ],
  },
  // {path:'home/tableStatus',component:TableStatusComponent},
  // {path:'home',component:HomeComponent},
  {path:'payment',component:PaymentPageComponent},
  {path:'bus',component:BusPageComponent},
  {path:'train',component:TrainPageComponent},
  {path:'flight',component:FlightPageComponent,
  children: [
    { path: 'hotelHOme', component: HotelHomeComponent },
    { path: 'tableStatus', component: TableStatusComponent },
    { path: 'tableBooking', component: TableBookingComponent },
  ]
},
  {path:'car',component:CarPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  TableStatusComponent,
  TrainPageComponent,
  HomeComponent,
  TableBookingComponent,
  BusPageComponent,
  FlightPageComponent,
  CarPageComponent,
];