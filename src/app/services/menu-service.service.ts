import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  public status: BehaviorSubject<any> = new BehaviorSubject<any>({});
  constructor() { }

  
  private _value : string;
  public get value(){
    return this.status.asObservable();
  }
  set(val: any) {
    this.status.next(val);
  }

  //this.menuservice.set(1);
  
}
