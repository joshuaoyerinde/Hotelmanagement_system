import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddroomComponent } from './addroom/addroom.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdmindarshboardComponent } from './admindarshboard/admindarshboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookedDetailsComponent } from './booked-details/booked-details.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { CompletePaymentComponent } from './complete-payment/complete-payment.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StaffbeforeenterGuard } from './guards/staffbeforeenter.guard';
import { InvoiceComponent } from './invoice/invoice.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoomsComponent } from './rooms/rooms.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffsDialogComponent } from './staffs-dialog/staffs-dialog.component';
import { UsersloginpageComponent } from './usersloginpage/usersloginpage.component';
import { ViewRoomsdetailsComponent } from './view-roomsdetails/view-roomsdetails.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';

const routes: Routes = [
  {path:'',redirectTo:'/homepage', pathMatch: 'full'},
  {path:'homepage', component: LandingpageComponent},
  {path:'bookrooms/:name/:id', component: BookpageComponent},
  {path:'loginpage', component:UsersloginpageComponent},
  {path:'invoice/:userId', component:InvoiceComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'roompage/:username/:userId', component:RoomsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'complete-pay/:ref', component:CompletePaymentComponent},
  // admin routing...................
  {path:'admin-login', component:AdminloginComponent},
  {path:'staffs-dialog', component:StaffsDialogComponent},
  {path:'staff-loginpage', component:StaffLoginComponent},
  {path:'admin-panel', component: AdminPanelComponent,  canActivate: [StaffbeforeenterGuard],  children:[
      {path:'', redirectTo:'admin-darsh', pathMatch:'full'},
      {path:'admin-darsh', component: AdmindarshboardComponent},
      {path:'add-staff', component: AddStaffComponent},
      {path:'add-room', component:AddroomComponent},
      {path:'view-staffs', component:ViewStaffComponent},
      {path:'rooms-details', component:ViewRoomsdetailsComponent},
      {path:'booked-details', component:BookedDetailsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
