import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SigupusersService {
  public basaUrl = environment.basaUrl
  constructor(public http : HttpClient) { }
  registerUesers(userdetails){
    return this.http.post<any>(`${this.basaUrl}registeruserprocess.php`,userdetails);
  }
  loginUsers(logdetails){
    return this.http.post<any>(`${this.basaUrl}loginuserprocess.php`,logdetails);
  }
}
