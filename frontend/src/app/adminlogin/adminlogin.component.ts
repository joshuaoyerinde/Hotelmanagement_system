import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  hide = true;
  public spinner = false;
  public errormsg = false;
  // constructor.....................
  constructor( 
    public fb:FormBuilder, 
    public staffservice: StaffService, 
    public router : Router
    ) { }

  public adminLoginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });
  get email(){return this.adminLoginForm.get('email').value;}
  get pass(){return this.adminLoginForm.get('password').value;}

  signInAdmin(){
    let signData : any = new FormData();
    signData.append('email',this.adminLoginForm.get('email').value);
    signData.append('pass',this.adminLoginForm.get('password').value);
    this.staffservice.adminlog(signData).subscribe(
      resp => {
          console.log(resp)
          localStorage.setItem('x-admin',JSON.stringify(resp.tk));
          let adminname = resp.adminname;
          sessionStorage.setItem('x-name',JSON.stringify(resp.adminname));
          this.spinner = true;
          if (resp.success){
            setTimeout(() => {
              this.spinner = false;
              this.router.navigate(['/admin-panel']);
            }, 3000);
          }else{
            setTimeout(() => {
              this.errormsg = resp.errormsg;
              console.log(this.errormsg);
              this.spinner = false;
              this.router.navigate(['/admin-login']);
            }, 7000);
        }
    },
    (err:HttpErrorResponse)=>{
        console.log(err);
    });
  }
  ngOnInit(): void {
    
    console.log(this.adminLoginForm.get('email').value);
  }

}
