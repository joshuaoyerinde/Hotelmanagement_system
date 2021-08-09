import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigupusersService } from '../services/sigupusers.service';

@Component({
  selector: 'app-usersloginpage',
  templateUrl: './usersloginpage.component.html',
  styleUrls: ['./usersloginpage.component.css']
})
export class UsersloginpageComponent implements OnInit {
  public name;
  public id;
  errormessage

  constructor( 
      public _fb: FormBuilder, 
      public userLoginService: SigupusersService, 
      public rout: Router
    ) { }

  public loginUserForm = this._fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });

  get userEmail(){return this.loginUserForm.get('email');}
  get userPass(){return this.loginUserForm.get('password');}

  checkLogin(){
    let userData:any = new FormData();
    console.log(this.loginUserForm.get('email').value);
    userData.append('email', this.loginUserForm.get('email').value);
    userData.append('password', this.loginUserForm.get('password').value);

    this.userLoginService.loginUsers(userData).subscribe(
      r => {
        console.log(r);
        let {success,username,token, userId, errormsg} = r;
        this.name = username;
        this.id = userId
        localStorage.setItem('resp',JSON.stringify(token));
        if (success){
            this.rout.navigate(['bookrooms/' + this.name + '/' + this.id]);
        }else{
          this.errormessage = errormsg;
          localStorage.removeItem('resp');
        }
      // }
    },(err:HttpErrorResponse)=>{
        console.log(err)
        this.rout.navigate(['/loginpage']);
    });
  }
  ngOnInit(): void {
  }
}
