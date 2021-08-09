import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigupusersService } from '../services/sigupusers.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(public formbuild: FormBuilder, public sigupservice: SigupusersService, public route: Router) { }
  fullname
  phone
  adderess
  email
  password
  spina = false;
  signuptext = true;
  // formregistration
  public formregistration = this.formbuild.group({
    fullname:['',[Validators.required]],
    phone:['',[Validators.required]],
    adderess:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
    get userfullname(){return this.formregistration.get('fullname');}
    get userphone(){return this.formregistration.get('phone');}
    get useradd(){return this.formregistration.get('adderess')}
    get useremail(){return this.formregistration.get('email')}
    get userpass(){return this.formregistration.get('password')}   
  ngOnInit(): void {
  
  }
  // ....submit form
  submitusers(){
    this.spina = true;
    this.signuptext = false;
    let formdata = new FormData();
    formdata.append("fullname",this.formregistration.get('fullname').value);
    formdata.append("phone",this.formregistration.get('phone').value);
    formdata.append("adderess",this.formregistration.get('adderess').value);
    formdata.append("email",this.formregistration.get('email').value);
    formdata.append("password",this.formregistration.get('password').value);
    // console.log(this.formregistration.get('fullname').value);
    this.sigupservice.registerUesers(formdata).subscribe(res => {
      let {success} = res;
      setTimeout(() => {
        console.log(res);
        if (success == true) {
            this.spina = false;
            this.route.navigate(['/loginpage']);
        }else{
          this.spina = true;
        }
      }, 3000);
    },(err:HttpErrorResponse)=>{
        console.log(err);
    })
  }
 
}
