import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StaffService } from '../services/staff.service';
import { ViewStaffComponent } from '../view-staff/view-staff.component';

@Component({
  selector: 'app-staffs-dialog',
  templateUrl: './staffs-dialog.component.html',
  styleUrls: ['./staffs-dialog.component.css']
})
export class StaffsDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data, 
    public dialogrf: MatDialogRef<ViewStaffComponent>, 
    public fb: FormBuilder, 
    public staffservice: StaffService
    ) { }

  public info = this.data;
  // public disable = true;
  public formEditStaff = this.fb.group({
    firstname:[this.info.first_name,[Validators.required]],
    lastname:[this.info.last_name,[Validators.required]],
    phone:[this.info.phone,Validators.required],
    email:[this.info.email,[Validators.required,Validators.email]],
    role:[this.info.role_id,Validators.required],
    address:[this.info.adderess,Validators.required]
  })
  ngOnInit(): void {
    this.staffservice.fetchStaffs().subscribe(o=>console.log(o));
    
  }
  public type=false
  public disable =  this.formEditStaff.disable();
  editDetails(){
    if(this.type==false){
      this.formEditStaff.enable();
      this.type=true
    }else{
       this.formEditStaff.disable();
       this.type = false;
    }
  }
  updateStaffDetails(){
    let dataupdate = new FormData();
    dataupdate.append('fname', this.formEditStaff.get('firstname').value);
    dataupdate.append('lname',this.formEditStaff.get('lastname').value);
    dataupdate.append('phone',this.formEditStaff.get('phone').value);
    dataupdate.append('email',this.formEditStaff.get('email').value);
    dataupdate.append('role',this.formEditStaff.get('role').value);
    dataupdate.append('address',this.formEditStaff.get('address').value);
    dataupdate.append('id', this.info.staff_id);
    console.log(this.info.staff_id);
      this.staffservice.updateStaffsBio(dataupdate).subscribe(
        a=>{
        console.log(a);
      });
      this.refreshPage();

  }
  refreshPage(){
    this.staffservice.fetchStaffs();
  }

}
