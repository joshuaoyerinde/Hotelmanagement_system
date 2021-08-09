import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookRoomsService } from '../services/book-rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  public getBooks = JSON.parse (sessionStorage.getItem('bookdeatails'));
  public getUserId;
  public pricedue;
  // formBooking  = new FormData();
  
  constructor(
    public _fb: FormBuilder, 
    public actroute : ActivatedRoute, 
    public router: Router, 
    public bookservice: BookRoomsService
    ) { }

  public dateBookForm = this._fb.group({
    checkin:[''],
    checkout:[''],
    room_id:this.getBooks.rooms_id,
    roomnum:this.getBooks.room_numner,
    price:this.getBooks.price,
    roomtype:this.getBooks.room_type,
  })
  ngOnInit(): void {
    console.log(this.getBooks);
    this.getUserId = this.actroute.snapshot.params.userId;
    console.log(this.getBooks.room_id + this.getUserId);
  }
  bookDate(){
    let formBooking : any  = new FormData();
    // p = price;
    formBooking.append('rid', this.dateBookForm.get('room_id').value);
    formBooking.append('rnum', this.dateBookForm.get('roomnum').value);
    formBooking.append('rprice', this.dateBookForm.get('price').value);
    formBooking.append('rtype', this.dateBookForm.get('roomtype').value);
    formBooking.append('checkin', this.dateBookForm.get('checkin').value);
    formBooking.append('checkout', this.dateBookForm.get('checkout').value);
    formBooking.append('customerid', this.getUserId);

    let calDate = Number(this.dateBookForm.get('checkout').value) - Number(this.dateBookForm.get('checkin').value)
    let milli = calDate/3600000;
    let hrs = milli/24;
    let pricedue = Number(this.dateBookForm.get('price').value) * hrs;
    formBooking.append('pricedue', pricedue);
    console.log('$',pricedue);
    

    this.bookservice.postBookingInfo(formBooking).subscribe(d => {
      console.log(d)
    },(err:HttpErrorResponse)=>{
        console.log(err);
    });
    console.log(this.dateBookForm.get('roomnum').value);
    // alert('yes');
    this.add();
  }
  add(){
    this.router.navigate(['invoice/'+ this.getUserId]);
    // alert('ojiji')
    // let calDate = Number(this.dateBookForm.get('checkout').value) - Number(this.dateBookForm.get('checkin').value)
    // let milli = calDate/3600000;
    // let hrs = milli/24;
    // let price = Number(this.dateBookForm.get('price').value) * hrs;
    // p = price;
    // console.log('$',p);

    // return p;
  }

}
