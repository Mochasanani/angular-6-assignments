import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() tictoc = new EventEmitter<{tic: number}>();
  index = 0;
  intervalfn;
  //const _this = this;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    console.log('Start ....');
    this.intervalfn = setInterval(
    () => this.onTick(), 1000);
  }

  onTick() {
    this.index++;
    this.tictoc.emit({tic: this.index});
    console.log(this.index);
  }

  onStop() {
    console.log('Stop ....');
    clearInterval(this.intervalfn);
    this.index = 0;
  }

}
