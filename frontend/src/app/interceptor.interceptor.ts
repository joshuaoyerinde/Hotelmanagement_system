import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor() {}
  // let name =
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem('resp')!== null){ 
      const API_KEY = JSON.parse(localStorage.getItem('resp'));
      return next.handle(request.clone({setHeaders:{Authorization:`${API_KEY}`}}));
    }
    return next.handle(request);
  }
}
