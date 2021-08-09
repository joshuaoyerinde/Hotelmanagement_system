import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StaffService {
public basaUrl = environment.basaUrl;
  constructor( public _http: HttpClient) { }
//....post method begin here..
  registerStaff(staffdata){
    return this._http.post<any>(`${this.basaUrl}staffprocess.php`,staffdata);
  }
  // addroom
  addRoom(roomdata){
    return this._http.post<any>(`${this.basaUrl}addroomprocess.php`,roomdata);
  }
  updateStaffsBio(data){
    return this._http.post<any>(`${this.basaUrl}adminupdatestaff.php`,data);
  }
  dimuteStaff(del){
    return this._http.post<any>(`${this.basaUrl}admindropstaff.php`,del);
  }

  // ......Admin login function
  adminlog(admindata){
    return this._http.post<any>(`${this.basaUrl}adminlogin.php`,admindata);
  }
  isAdminLogin(){
    return localStorage.getItem('x-admin');
  }
  // staff login function
  staffLog(staffLog){
    return this._http.post<any>(`${this.basaUrl}stafflogin.php`,staffLog);
  }

  // get method start here
  fetchStaffs(){
    return this._http.get<any>(`${this.basaUrl}staffdetails.php`);
  }
}
