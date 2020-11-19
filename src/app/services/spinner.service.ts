import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public activated: boolean = false;
  public state: Observable<boolean>;

  constructor() {
    this.state = new Observable( watcher => {
      setInterval(() => {
        watcher.next(this.activated);
      }, 300);
    })
   }

  isActivated(){
    return new Promise( (resolve) => {
      resolve(this.activated);
    })
  }
  activate(){
    this.activated = true;
  }
  deactivate(){
    this.activated = false;
  }
}
