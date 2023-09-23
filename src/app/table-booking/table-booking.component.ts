import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TableService } from '../table-booking.service';
import { Router } from '@angular/router';
// import { timeValidator } from "../app.validator";
@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.scss']
})
export class TableBookingComponent {
  showText: any;
  constructor(private fb: FormBuilder,private tableService:TableService,private route:Router) {
  }
  signupForm:any
  inValidTime: boolean = true;
  datePick = new FormControl(['', Validators.required]);
  number:any
  maxChars:any=10
  tableData:any=[]
  flightBoolean:boolean=false;
  ngOnInit(): void {
    let date = new Date().toLocaleDateString()
    this.number = /^[0-9]*$/
    this.signupForm = this.fb.group({
      Name: ['', Validators.required],
      PhoneNumber: ['',  [Validators.required,Validators.minLength(10), Validators.maxLength(10),Validators.pattern(this.number)]],
      datePick: ['', Validators.required],
      Time: ['', [Validators.required, this.timeValidator]],
      Email: ['', [Validators.required, Validators.email]],
      Numberofadults: ['', [Validators.required,Validators.pattern(this.number)]],
      Numberofchilderns:['',[Validators.required,Validators.pattern(this.number)]]
    })
    console.log(date.split('/'),'9999',this.signupForm?.date?.split('-') )
    let vale = date.split('/');
    //let newvalue = this.signupForm.date.split('-')

    this.tables()
    console.log(this.signupForm)
      let value = window.location.href
      if(value.includes('flight')){
        this.flightBoolean = true;
    }
  }

  ngDoCheck() {
    console.log(this.signupForm.controls.Time, "41:::;")
  }
  getRndInteger(min: number, max: number) {
     return Math.floor(Math.random() * (max - min)) + min;
   }
  bookTable(){
    console.log(this.signupForm,'909',this.signupForm?.date?.split('-'))
    //this.signupForm.reset()
    this.signupForm.value.id =this.getRndInteger(200,1000)
    this.tableService.tableForm(this.signupForm.value)
    this.tableData.push(this.signupForm.value)
   // localStorage.setItem('tableData', JSON.stringify(this.tableData))
   this.timeCheck()
  
  }
  timeCheck(){
    console.log(this.tableService.dummyData,'000000000',this.signupForm?.date?.split('-'))
 
        this.tableService.addnewData(this.signupForm.value)
        setTimeout(()=>{
          this.route.navigate(['payment'])
        },3000)
        this.route.navigate(['/tableShow'])

  }
  tables(){
    console.log(this.tableService.dummyData.length,this.tableService.tableFormValues.length)
    if(this.tableService.dummyData.length < 20){
      this.showText =  20 -this.tableService.tableFormValues.length + ' tables only avalibule'
    }else{
      console.log('nooo')
    }
  }
    getMinTime(): string {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  timeChange($event:any){
    console.log('455',$event.target.value)
    this.tableService.dummyData.filter((v:any)=>{
      if(v.Time === $event.target.value){
        this.showText =  20 -this.tableService.tableFormValues.length + ' tables only avalibule'
      }else{
        // console.log('9787')
      }
    })
    const timeValue = $event.target.value.split(":")
    var date = new Date(this.signupForm.value.datePick);
    const today = new Date();
    date.setHours(Number(timeValue[0]));
    date.setMinutes(Number(timeValue[1]));
      console.log(date.getTime(), today.getTime(), "98:::")
     this.inValidTime = date.getTime() < today.getTime()
  }
  // dateControl = new FormControl('', [Validators.required, this.futureDateValidator]);
  dateValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      const date = new Date(control.value);
      const today = new Date();
      // console.log(date.getTime() , today.getTime(), "98:::")
      if (date.getTime() < today.getTime()) {
        return { 'invalidDate': true }
      }
    }
    return { 'invalidDate': false };
  }
  todayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  timeValidator(control: AbstractControl): ValidationErrors | null {
    // dateValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value) {
          const date = new Date(control.value);
          const today = new Date();
          if (date.getTime() < today.getTime()) {
            console.log(date.getTime(), today.getTime(), "9:::")
            return { 'invalidDate': true }
          }
        }
        return null;
    //   }
}

  futureDateValidator(control: FormControl) {
    const selectedDate = new Date(control.value);
    const today = new Date();

    // Check if the selected date is in the future
    if (selectedDate < today) {
      return { futureDate: true };
    }
    return null; // If validation passes, return null
  }
}
