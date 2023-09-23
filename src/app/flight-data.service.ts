import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//broh ala avvadu broh antha long import nduku

@Injectable({
    providedIn: 'root'
})
export class FlightService {
    constructor(private http: HttpClient) {

    }

    flightData() {
        // let url ='https://airport-info.p.rapidapi.com/airport'
        let url = 'https://dummyjson.com/carts'
        this.http.get(url).subscribe((v:any)=>{
            console.log(v,'777')
            return v
        })
    //     const data = null;

    //     const xhr = new XMLHttpRequest();
    //     xhr.withCredentials = true;

    //     xhr.addEventListener('readystatechange', function () {
    //         if (this.readyState === this.DONE) {
    //             console.log(this.responseText);
    //         }
    //     });

    //     xhr.open('GET', 'https://airport-info.p.rapidapi.com/airport');
    //     xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
    //     xhr.setRequestHeader('X-RapidAPI-Host', 'airport-info.p.rapidapi.com');

    //   return  xhr.send(data);
    }
}