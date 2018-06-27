import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = 'Anonymous';
  allowClick = false;

  constructor() { }

  ngOnInit() {
  }

  onReset() {
    this.username = '';
  }


  onUpdateUsername(event: Event) {
    console.log(event);
    this.username = (<HTMLInputElement>event.target).value;
  }

}
