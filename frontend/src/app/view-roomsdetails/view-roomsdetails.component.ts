import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookRoomsService } from '../services/book-rooms.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-view-roomsdetails',
  templateUrl: './view-roomsdetails.component.html',
  styleUrls: ['./view-roomsdetails.component.css']
})
export class ViewRoomsdetailsComponent implements OnInit {
public arrayOfRooms;
public condition;
  constructor(
    public servicebooks: BookRoomsService
    ) { }

  ngOnInit(): void {
    this.getRoomsDetails();
  }
  getRoomsDetails(){
    this.servicebooks.fetchRooms().subscribe(
      data=>{
        console.log(data);
        this.arrayOfRooms = data;
        this.arrayOfRooms.forEach(
          element => {
            console.log(element.status == false ? 'available' :'occupied');
            if(element.status == false){ this.condition = 'Available';}
            else  { this.condition = 'Occupied';}
      });
    })
  }
  viewRoomDetails(a){
      console.log(a);
  }
  dropRoomDetails(value){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'ml-2',
        // cancelButton: 'btn btn-danger'
      },
      confirmButtonColor:'#ffb03b',
      cancelButtonColor:'#d33',
      width:'355'
      // buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No,',
      reverseButtons: true,
      preConfirm:()=>{
         this.servicebooks.dropRoom({id:value}).subscribe(d=>{
            console.log(d)
            this.getRoomsDetails();
          },(err:HttpErrorResponse)=>{
            console.log(err);
        })
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
    console.log(value);
   
  }
}
