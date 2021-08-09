import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StaffService } from '../services/staff.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
import { ActivatedRoute } from '@angular/router';


interface Roles{
  name: string;
  // sound: string;
}
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  // firstFormGroup
  // secondFormGroup
  adminusername;
  public spinner = false;
  roles: Roles[] = [
    {name: 'Manager'},
    {name: 'Staff'},
    {name: 'Receptionist'},
    {name: 'cleaner'},
  ];
  constructor(
    private _formBuilder: FormBuilder, 
    public staffservice: StaffService,
    public actroute: ActivatedRoute,
    ) { }
  panelOpenState = false;
  public staffRegForm = this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required],
    address:['',Validators.required],
    designation:['',Validators.required],
    upload:''
  });
  getAdminParams(){
    this.adminusername = this.actroute.snapshot.params.adminusernames;
    console.log(this.adminusername);
  }
  ngOnInit(): void {
    this.getAdminParams()
  }
  upload(e){
    console.log(e)

  }
  submitStaffRegister(){
    let staffFormDta:any = new FormData();
    console.log(this.staffRegForm.get('firstname').value);
      staffFormDta.append("firstname",this.staffRegForm.get('firstname').value);
      staffFormDta.append("lastname",this.staffRegForm.get('lastname').value);
      staffFormDta.append("email",this.staffRegForm.get('email').value);
      staffFormDta.append("phone",this.staffRegForm.get('phone').value);
      staffFormDta.append("address",this.staffRegForm.get('address').value);
      staffFormDta.append("designation",this.staffRegForm.get('designation').value);

    this.staffservice.registerStaff(staffFormDta).subscribe(resp => {
      this.spinner = true;
      if(resp.success == true){
        setTimeout(() => {
          this.spinner = false;
        }, 3000);
          Swal.fire('success',`${resp.msg}`,'success');
      }else{
        // console.log('invalid details');
        Swal.fire('success',`${resp.fail}`,'error');
      }
      console.log(resp);
    });
    // this.staffservice.registerStaff(staffFormDta).subscribe(data =>{

    // });

  }

}
