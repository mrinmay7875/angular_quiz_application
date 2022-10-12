import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  userSource = new BehaviorSubject('');
  currentUser = this.userSource.asObservable();

  constructor() {}

  public changeUserName(username: any): void {
    this.userSource.next(username);
  }
}
