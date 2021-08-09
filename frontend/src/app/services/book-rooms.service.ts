import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookRoomsService {
  public baseurl = environment.basaUrl;
  constructor(public http : HttpClient) { }
  // post method
  postBookingInfo(data){
    return this.http.post<any>(`${this.baseurl}booking.php`,data) 
  }

  // get method...........
  fetchRooms(){
    return this.http.get<any>(`${this.baseurl}roomsdetails.php`);
  }
  dropRoom(del){
    return this.http.post(`${this.baseurl}admindeleteroom.php`,del);
  }
  bookedDetails(){
    return this.http.get(`${this.baseurl}bookingdetails.php`);
  }
  fetchedTotal(){
    return this.http.get<any>(`${this.baseurl}adminTotal.php`);
  }
  fetchedPaymentInfo(){
    return this.http.get<any>(`${this.baseurl}`);
  }

  // for payment............
  payDta(payupdata){
    return this.http.post<any>(`${this.baseurl}payment.php`,payupdata);
  }
  completePayService(pay){
    return this.http.post<any>(`${this.baseurl}verify_payment.php`,pay);
  }
}
