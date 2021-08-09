import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookRoomsService } from '../services/book-rooms.service';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {
  public username;
  public userId
  public arrayOfRoom;
  public condition = true
  public url = 'http://localhost/hotelmanagement-system/Hotel_manage/uploads/'
  constructor(
    public actroute: ActivatedRoute, 
    public router : Router, 
    public bookservice:BookRoomsService
    ) { }

  ngOnInit(): void {
    this.username = this.actroute.snapshot.params.name;
    this.userId = this.actroute.snapshot.params.id;
    this.getRooms();
   
    // console.log(JSON.parse (sessionStorage.getItem('bookdeatails')));
  }
getRooms(){
  this.bookservice.fetchRooms().subscribe(res=>{

    this.arrayOfRoom = res;
    console.log (this.arrayOfRoom);
    // let gg = this.arrayOfRoom.filter(r => r.status == 1);

    this.arrayOfRoom.forEach(e=> {
      if(e.status == 'occupied'){
          this.condition = false; 
      }else{
        this.condition = true;
      }
          // console.log(typeof(e.status));
    });
    // console.log(gg);
    // if(gg)return  this.condition = 'Available';
    // else return  this.condition = 'not Available';  
    
    // this.arrayOfRoom.forEach(element => {
    //     console.log(element.status);

    //     if(element.status == 1 )
    //     else return  this.condition = 'not Available';  
    // });
  },(err: HttpErrorResponse )=>{
    if(err){
      this.router.navigate(['/loginpage']);
      console.log(err);
    }
  });
}
// book function
bookChoice(data, a){
  console.log(data,a);
  this.router.navigate(['/roompage/'+ this.username + '/' + this.userId]);
  sessionStorage.setItem('bookdeatails',JSON.stringify(data));
}
}
