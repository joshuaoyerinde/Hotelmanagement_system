import { Component, OnInit } from '@angular/core';
// import { BookedDetailsComponent } from '../booked-details/booked-details.component';
import { BookRoomsService } from '../services/book-rooms.service';
import {Chart} from '../../../node_modules/chart.js';


@Component({
  selector: 'app-admindarshboard',
  templateUrl: './admindarshboard.component.html',
  styleUrls: ['./admindarshboard.component.css']
})
export class AdmindarshboardComponent implements OnInit {

  public totalnumOfRoom;
  public t
  constructor(
    public bookedserveice:BookRoomsService,
  ) { }

  bookedDetails(){
    this.bookedserveice.bookedDetails().subscribe(
      (resp:any)=>{
        this.totalnumOfRoom = resp.totalnum;
        // this.getChart(this.totalnumOfRoom);
        console.log(this.totalnumOfRoom)
      })
  }
  getTotal(){
    this.bookedserveice.fetchedTotal().subscribe(
      data=>{
         console.log(data)
         this.getChart(data)
      });
  }
  ngOnInit(): void {
    this.bookedDetails();
   this.getTotal();
    // this.getChart(); 
  }
  getChart(paramscharts){
    // this.ee(t)
    // let data =  this.totalnumOfRoom
    let ctx = document.getElementById('myChart');
      let myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Rooms', 'BookedRoooms', 'Staffs','Charts', 'Receptionist'],
              datasets: [{
                  label: '# of Votes',
                 data: paramscharts,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      // 'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      // 'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1,
                  width:23
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });

  }
  
  

}
