import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('')
  });

  //  loginUser() {
  //   // console.log(this.loginForm.value);
  // this.http
  //     .post<any>('http://127.0.0.1:8000/add/', {
  //       name: this.loginForm.value.username,
  //       score: 20
  //     })
  //     .subscribe((data) => {
  //       console.log("User has been saved successfully",data);
  //       this.router.navigateByUrl('game');
  //     });
  // }

  loginUser() {
    this.router.navigateByUrl('game');
  }
}
