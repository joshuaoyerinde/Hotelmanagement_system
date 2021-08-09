import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { error } from 'console';
import { BookRoomsService } from '../services/book-rooms.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  uid = this.actroute.snapshot.params.userId;
  spin = false;
  constructor(
    public bookserve: BookRoomsService,
    public formPay: FormBuilder,
    public route: Router,
    public actroute: ActivatedRoute
    ) { }

  public formPayment = this.formPay.group({
    cardnumber:['',[Validators.required, Validators.maxLength(4)]],
    // securitycode:['',[Validators.required]],
    name:['',Validators.required],
    // epiredmonth:['',Validators.required],
    // year:['',Validators.required],
    userid: this.uid
  });
  get cardnum(){return this.formPayment.get('cardnumber');}
  // get seccode(){return this.formPayment.get('securitycode');}
  get cardname(){return this.formPayment.get('name');}
  // get expmonth(){return this.formPayment.get('epiredmonth');}
  // get expyrs(){return this.formPayment.get('year');}

  ngOnInit(): void {
    // this.bookserve.payDta().subscribe(res=>console.log(res));
  }
  makePament(){
    
    if (this.formPayment.invalid) {
      console.log('invalid') 
      console.log(this.formPayment.get('userid').value);
      // return this.formPayment.invalid;
    }else{
      let savepayment = this.formPayment.value;
      this.spin = true;
      this.bookserve.payDta(savepayment).subscribe(
        response =>{
      let  {status, data} = response
      if(status == true){
        console.log('yes0000');
        this.route.navigate(['/complete-pay/'+ data.reference]);
      }
        console.log(response);
      }, error=>{
        if (error.status == 200){
          this.spin = false;
           console.log('yes0000');
        }else if (error.status == 'pending'){
          console.log('yeeeee')
        }
      });
    }
  }
  

}
