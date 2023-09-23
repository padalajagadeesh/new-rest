import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { TableService } from './table-booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'restaurantBookingApp';
  showText: any;
  travel: boolean =false;
  outSideclick: boolean =false;
  @HostListener('window:popstate', ['$event'])
  @ViewChild('toggleButton') toggleButton: ElementRef | any;
  @ViewChild('menu') menu: ElementRef | any;
  isMenuOpen: boolean =false;
  onPopState(event: any) {
    console.log('Back button pressed',event.srcElement.location.pathname);
    if(event.srcElement.location.pathname){
      history.pushState(null,'',window.location.href);
    }
  }
  constructor(private tableService:TableService,private eRef:ElementRef,private renderer: Renderer2) {
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.toggleButton?.nativeElement && e.target!==this.menu?.nativeElement){
        this.isMenuOpen=false;
        console.log('889888888')
    }
    });
  }
  ngOnInit(){
    
   
    // if(this.tableService.dummyData.length < 20){
    //   this.showText =  20 -this.tableService.tableFormValues.length + ' tables only avalibule'
    // }else{
    //   console.log('nooo')
    // }
    
  }
  booking(){
    this.travel= ! this.travel
    this.isMenuOpen = !this.isMenuOpen
  }
  // @HostListener('document:click', ['$event'])
  // clickout(event: { target: any; }) {
  //   if(this.eRef.nativeElement.contains(event.target)) {
  //     this.outSideclick = true;
  //     console.log('0909')
  //   } else {
  //     console.log('rttrt')
  //   }
  // }

}
