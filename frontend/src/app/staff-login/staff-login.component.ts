import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
  hide = true;
  public getstatus;
  public errormsg;

  public baseUrl = environment.basaUrl;

  constructor(
    public fb : FormBuilder, 
    public staffservice : StaffService, 
    public http: HttpClient, 
    public router: Router
    ) { }

  public staffLoginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
  get email(){return this.staffLoginForm.get('email').value;}
  get pass(){return this.staffLoginForm.get('password').value;}

  // fetchAllStaff(){
  //   this.http.get<any>(`${this.baseUrl}staffdetails.php`).subscribe(r => {
  //     console.log(r);
  //   //  this.getstatus = r;
  //   });
  //   // return this.getstatus;
  // }
  staffSignin(){
    let signData : any = new FormData();
    signData.append('email',this.staffLoginForm.get('email').value);
    signData.append('pass',this.staffLoginForm.get('password').value);
    this.staffservice.staffLog(signData).subscribe(
      data=>{
          console.log(data);  
          localStorage.setItem('X-staff',JSON.stringify(data.staffToken));
          //
          if(data.success == true && data.status== "manager"){  // manager condition
            this.router.navigate(['/admin-panel/add-staff']);
          }
          else if(data.status == "Staff"){ // receptionist condition
            this.router.navigate(['/admin-panel']);
          }
          else{
            localStorage.removeItem('X-staff');
            this.router.navigate(['/staff-loginpage']);
            this.errormsg = data.msg;
          }
          //
      },
        (err:HttpErrorResponse)=>{
          console.log(err);
    })
  }
  ngOnInit(): void {
    // console.log(this.getstatus);
  }

}
