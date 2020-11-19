import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailVerifierService {

  constructor() { }

  static verifyEmailFormat(email : string): boolean{
    return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) != null;
  }
}
