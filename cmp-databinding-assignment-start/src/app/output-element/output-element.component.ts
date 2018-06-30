import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-output-element',
  templateUrl: './output-element.component.html',
  styleUrls: ['./output-element.component.css']
})
export class OutputElementComponent implements OnInit {
  @Input('outputElement') element: {type: string, name: string, tic: number};
  @Input() intervalnum: number;

  constructor() { }

  ngOnInit() {
  }

}
