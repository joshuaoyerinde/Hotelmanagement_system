import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SweetAlertCustomClass } from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { StaffService } from '../services/staff.service';
import { StaffsDialogComponent } from '../staffs-dialog/staffs-dialog.component';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit {
public arrayOfStaff;
public name="";
  constructor(public StaffService: StaffService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStaffDetails();
   
  }
  getStaffDetails(){
    this.StaffService.fetchStaffs().subscribe(
        data => {
        this.arrayOfStaff = data;
        console.log(this.arrayOfStaff);
    },
    (err:HttpErrorResponse)=>{
        console.log(err);
    });
  }
  //function to preview each details
  viewDetails(a:any){
    console.log(a);
    let previewStaffs = this.dialog.open(StaffsDialogComponent,{data:a});
    previewStaffs.afterClosed().subscribe(res =>{
      this.getStaffDetails();
      console.log(`Dialog boss:${res}`);
    })
  }
  removeDetails(value){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success ml-2',
        // cancelButton: 'btn btn-danger',
      },
      confirmButtonColor:'#ffb03b',
      cancelButtonColor:'#d33',
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      width: 350,
      // buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      reverseButtons: true,
      // deleting of staff service 
      preConfirm:()=>{
        this.StaffService.dimuteStaff({id:value}).subscribe(
          data=>{
            console.log(data);
            this.getStaffDetails();
          }
        )
        console.log(value);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
   
  } 

}
