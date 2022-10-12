import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scorepage',
  templateUrl: './scorepage.component.html',
  styleUrls: ['./scorepage.component.css']
})
export class ScorepageComponent implements OnInit {

  gameEndText : string='Thanks for playing! You can refresh the page to start playing again';
@Input() score: any=0;

  constructor() { }

  ngOnInit(): void {
  }

}
