// import { DatePipe } from '@angular/common';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { BookRoomsService } from '../services/book-rooms.service';

@Component({
  selector: 'app-booked-details',
  templateUrl: './booked-details.component.html',
  styleUrls: ['./booked-details.component.css']
})
export class BookedDetailsComponent implements OnInit {
public bookedInfo;
public checkEprDate;
public expicon 
public notexp = true
public currentDate = new Date(); 
public cc;
public dd;
  constructor(
        public bookedservice: BookRoomsService
    ) { }

  ngOnInit(): void {
    this.fetchBookedDetails();
  }
  fetchBookedDetails(){
      this.bookedservice.bookedDetails().subscribe(
        (resp:any)=>{
        console.log(resp.data);
        this.bookedInfo = resp.data;
        let  cheOutDate = this.bookedInfo.find(r => r.booked_id);
        this.checkDate(cheOutDate);
        this.bookedInfo.forEach(
          el => {
              this.dd  = el.checkout_date;
              // console.log(typeof(this.dd));
              this.cc = stringify(this.currentDate);
              // console.log(typeof(this.cc));
              if (this.cc > this.dd){

                console.log('expired',el.booked_id)
                this.expicon = 'ex';
                // this.notexp = false
              }else{
                console.log('not expired',el.booked_id)
                this.expicon = 'not'
              }
              // console.log(typeof(cc));
        });
      });
      
    }
    checkDate(date){
      // let dd = date.checkout_date
      // let cc = stringify(this.currentDate)
      // console.log(date);
      // console.log(cc);
      // if(cc > dd){
      //   console.log('expire')
      //   this.expicon = true;
      //   this.notexp = false

      // }else{
      //   this.expicon = false;
      //   console.log('yes not expired');
      //   this.notexp = true
        // this.notexp = true
        // console.log(this.currentDate);
        // console.log(dd);  
        // console.log(this.currentDate.getMonth());
        // console.log(typeof(date));
      // }
  }
}
