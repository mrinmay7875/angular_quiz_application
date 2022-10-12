import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomePageComponent implements OnInit {
  // username?: string="Debapriya";
  constructor(
    private http: HttpClient,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    username: new FormControl(''),
  });

  loginUser() {
    this.sharedService.changeUserName(this.loginForm.value.username);
    // console.log(this.loginForm.value.username);
    
    this.router.navigateByUrl('game');
  }
}
