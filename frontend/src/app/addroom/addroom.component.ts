import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StaffService } from '../services/staff.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

// interface Roomtype{
//   name:string;
//   type:string;
// }
@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {
// roomtype: Roomtype[] = [
//   {name:'Execute', type:'Ac'},
//   {name:'Regular', type:'No/Ac'},
//   {name:'Standard', type:'--'}
// ]
public image : File;

panelOpenState = false;
  constructor( public _fb: FormBuilder, public addRoomService: StaffService) { }

  public addRoomForm = this._fb.group({
    roomnumber:['',[Validators.required]],
    roomtype:['',Validators.required],
    price:['',Validators.required],
    name:['',Validators.required],
    quantity:['',Validators.required],
    roomcondition:['',Validators.required],
    upload:''
  });
  get rn(){return this.addRoomForm.get('roomnumber').value;}
  get rt(){return this.addRoomForm.get('roomntype').value;}
  get price(){return this.addRoomForm.get('price').value;}
  get name(){return this.addRoomForm.get('name').value;}

  upload(e){
    this.image =e.target.files[0];
    console.log(this.image);
  }
  submitUpload(){
    let addRoomData = new FormData();
    console.log(this.addRoomForm.get('roomtype').value);
    addRoomData.append('rnumber',this.addRoomForm.get('roomnumber').value);
    addRoomData.append('price',this.addRoomForm.get('price').value);
    addRoomData.append('rtype',this.addRoomForm.get('roomtype').value);
    addRoomData.append('name',this.addRoomForm.get('name').value);
    addRoomData.append('quantity',this.addRoomForm.get('quantity').value);
    addRoomData.append('roomcondition',this.addRoomForm.get('roomcondition').value);
    addRoomData.append('image',this.image);

    this.addRoomService.addRoom(addRoomData).subscribe(data=>{
      console.log(data);
      if(data.success == true){
        Swal.fire('success',`${data.msg}`,'success');    
      }else{
        Swal.fire('Cancelled',`${data.msg}`,'error'); 
      }
    });
  }
  ngOnInit(): void {
    // Swal.fire('Hello Angular');  
    // Swal.fire(  
    //   'Cancelled',  
    //   'Your imaginary file is safe :)',
    //   'error'  
    //   )    

  }

}
