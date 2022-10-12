import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scorepage',
  templateUrl: './scorepage.component.html',
  styleUrls: ['./scorepage.component.css'],
})
export class ScorepageComponent implements OnInit {
  @Input() score: any = 0;
  username: string = '';
  // gameEndText: string = `Thanks ${this.username} for playing!  You can refresh the page to start playing again`;

  constructor(private sharedService: SharedService, private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.sharedService.currentUser.subscribe((username: string) => {
  //     this.username = username;
  //   });
  // }

  ngOnInit() {
    this.sharedService.currentUser.subscribe(
      (username) => (this.username = username)
    );

    // Store ther Username and Score in Database
    // this.http
    //   .post<any>('http://127.0.0.1:8000/add/', {
    //     name: this.username,
    //     score: this.score,
    //   })
    //   .subscribe((data) => {
    //     console.log('User has been saved successfully', data);
    //   });
  }
}
