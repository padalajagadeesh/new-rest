import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableStatusComponent } from './table-status/table-status.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BusPageComponent } from './bus-page/bus-page.component';
import { FlightPageComponent } from './flight-page/flight-page.component';
import { TrainPageComponent } from './train-page/train-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { HotelHomeComponent } from './hotel-home/hotel-home.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [
    AppComponent,
    TableBookingComponent,
    TableStatusComponent,
    PaymentPageComponent,
    HomeComponent,
    BusPageComponent,
    FlightPageComponent,
    TrainPageComponent,
    LoginPageComponent,
    CarPageComponent,
    routingComponents,
    HotelHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
     FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
