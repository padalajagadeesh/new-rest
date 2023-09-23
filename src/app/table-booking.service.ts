import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//broh ala avvadu broh antha long import nduku

@Injectable({
  providedIn: 'root'
})
export class TableService {
tableFormValues:any=[]
    dummyData=[{
        Email: "jagadeesh@xvb",
        Name: "jagadeesh",
        Numberofadults:"1",
        Numberofchilderns: "3",
        PhoneNumber: "1324659879",
        Time: "1:09",
        date: "2023-06-23",
        id: 875
    },
    {
        Email: "tharun@xvb",
        Name: "tharun",
        Numberofadults:"7",
        Numberofchilderns: "3",
        PhoneNumber: "136549879",
        Time: "18:09",
        date: "2023-06-23",
        id: 873
    },
    {
        Email: "ad@xvb",
        Name: "person1",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "18:09",
        date: "2023-06-23",
        id: 323
    },
    {
        Email: "vbc@xvb",
        Name: "person12",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "18:09",
        date: "2023-06-23",
        id: 789
    },
    {
        Email: "vbc@xvb",
        Name: "person13",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "13:09",
        date: "2023-06-23",
        id: 363
    },
    {
        Email: "jagadeesh@xvb",
        Name: "jagadeesh",
        Numberofadults:"1",
        Numberofchilderns: "3",
        PhoneNumber: "1324659879",
        Time: "1:09",
        date: "2023-06-23",
        id: 853
    },
    {
        Email: "tharun@xvb",
        Name: "tharun",
        Numberofadults:"7",
        Numberofchilderns: "3",
        PhoneNumber: "136549879",
        Time: "21:09",
        date: "2023-06-23",
        id: 833
    },
    {
        Email: "ad@xvb",
        Name: "person1",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "18:09",
        date: "2023-06-23",
        id: 983
    },
    {
        Email: "vbc@xvb",
        Name: "person12",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "19:09",
        date: "2023-06-23",
        id: 565
    },
    {
        Email: "vbc@xvb",
        Name: "person13",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "13:09",
        date: "2023-06-23",
        id: 393
    },{
        Email: "jagadeesh@xvb",
        Name: "jagadeesh",
        Numberofadults:"1",
        Numberofchilderns: "3",
        PhoneNumber: "1324659879",
        Time: "1:09",
        date: "2023-06-23",
        id: 855
    },
    {
        Email: "tharun@xvb",
        Name: "tharun",
        Numberofadults:"7",
        Numberofchilderns: "3",
        PhoneNumber: "136549879",
        Time: "21:09",
        date: "2023-06-23",
        id: 863
    },
    {
        Email: "ad@xvb",
        Name: "person1",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "18:09",
        date: "2023-06-23",
        id: 823
    },
    {
        Email: "vbc@xvb",
        Name: "person12",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "19:09",
        date: "2023-06-23",
        id: 223
    },
    {
        Email: "vbc@xvb",
        Name: "person13",
        Numberofadults:"xcb",
        Numberofchilderns: "cxb",
        PhoneNumber: "xcb",
        Time: "13:09",
        date: "2023-06-23",
        id: 353
    },];
    newData: any;

    tableForm(SignData: any) {
        console.log(SignData,'77',this.dummyData.length)
        this.tableFormValues.push(SignData)
        this.newData = SignData
        this.tableFormValues =this.dummyData
        // this.dummyData.forEach((v:any)=>{
        //     console.log(v.Time,v.date,SignData?.Time,'67667',SignData.Time === v.Time,SignData)
        //           if(SignData?.Time === v.Time && SignData?.date === v.date){
        //             alert('alredy this time is has booked...sry the for.....')
        //           }
        // })
       
      }
      addnewData(value:any){
        this.dummyData.push(value)
      }
      getData(){
       return this.tableFormValues
      }
     
}