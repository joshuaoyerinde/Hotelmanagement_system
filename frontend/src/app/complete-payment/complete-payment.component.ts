import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookRoomsService } from '../services/book-rooms.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-complete-payment',
  templateUrl: './complete-payment.component.html',
  styleUrls: ['./complete-payment.component.css']
})
export class CompletePaymentComponent implements OnInit {
  spinner = false;
  constructor(
    public actroute: ActivatedRoute,
    public router: Router,
    public bookedserve: BookRoomsService
  ) { }
  public ref = this.actroute.snapshot.params.ref

  ngOnInit(): void {
    console.log(this.ref);
  }
  completeTrasnsaction(){
    let reference = this.ref;
    this.spinner = true;
    this.bookedserve.completePayService({ref:reference}).subscribe(resp=>{
      console.log(resp);
      let {success} = resp
      this.spinner = false;
      Swal.fire({
        icon: 'success',
        text: `${success}`,
        preConfirm:()=>{
          this.router.navigate(['/']);

        },
        willClose:()=>{
          this.router.navigate(['/']);
       }
      });
    },error=>{
      if(error.status == 'pending'){
        // this.router.navigate(['/complete-payment/' + this.ref])
        // this.spinner = true;
      }
      else if(error.status == 200){
        this.spinner = false;
      }
    })
  }

}
