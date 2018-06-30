import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydetails',
  templateUrl: './displaydetails.component.html',
  styleUrls: ['./displaydetails.component.css']
})
export class DisplaydetailsComponent implements OnInit {
  showDetail = false;
  clickDetails = [];
  public name: string;


  constructor() { }

  ngOnInit() {
  }

  onDisplayDetail() {
    this.showDetail = !this.showDetail;
    this.clickDetails.push(new Date());
  }

  getColor(index) {
    return index >= 5 ? "blue" : "";
   }
}
