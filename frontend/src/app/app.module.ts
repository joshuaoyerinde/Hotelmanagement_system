import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmindarshboardComponent } from './admindarshboard/admindarshboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersloginpageComponent } from './usersloginpage/usersloginpage.component';
import { RoomsComponent } from './rooms/rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { GalleryComponent } from './gallery/gallery.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { AddroomComponent } from './addroom/addroom.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { FilterStaffsDirective } from './derectives/filter-staffs.directive';
import { StaffsDialogComponent } from './staffs-dialog/staffs-dialog.component';
import { FilterStaffsPipe } from './pipes/filter-staffs.pipe';
import { MatNativeDateModule } from '@angular/material/core';
import { ViewRoomsdetailsComponent } from './view-roomsdetails/view-roomsdetails.component';
import { FilterRoomsPipe } from './pipes/filter-rooms.pipe';
import { BookedDetailsComponent } from './booked-details/booked-details.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CompletePaymentComponent } from './complete-payment/complete-payment.component';
// import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AdmindarshboardComponent,
    LandingpageComponent,
    BookpageComponent,
    RegistrationComponent,
    UsersloginpageComponent,
    RoomsComponent,
    AdminPanelComponent,
    GalleryComponent,
    AddStaffComponent,
    AddroomComponent,
    AdminloginComponent,
    StaffLoginComponent,
    ViewStaffComponent,
    FilterStaffsDirective,
    StaffsDialogComponent,
    FilterStaffsPipe,
    ViewRoomsdetailsComponent,
    FilterRoomsPipe,
    BookedDetailsComponent,
    InvoiceComponent,
    CompletePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    HttpClientModule,
    MatDatepickerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatStepperModule,
    MatProgressBarModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    SweetAlert2Module
    // DatePipe
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:InterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
