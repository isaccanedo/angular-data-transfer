import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  constructor() { }
   token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFkbWludXNlciIsInJvbGUiOiJhZG1pbiIsIm5iZiI6MTY2MTgzOTg1NiwiZXhwIjoxNjYxODQxMDU2LCJpYXQiOjE2NjE4Mzk4NTZ9.UH-ANZN90QYmi8mUfnySLbfdCfMuSBnsKycAMqsgUPg'
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenheadfer = req.clone({
      setHeaders: {
      Authorization:"bearer "+this.token
      }
    });

    return next.handle(tokenheadfer);
  }
}
