import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  outputElements = [];

  onTicTocEmit(data: {tic: number}) {
    if (data.tic % 2 !== 0) {
      this.outputElements.push({
        type: 'Odd',
        index: data.tic,
        content: 'Odd - Element'
      });
      console.log('Odd: ' + data.tic);
    } else {
      this.outputElements.push({
        type: 'Even',
        index: data.tic,
        content: 'Even - Element'
      });
      console.log('Even: ' + data.tic);
    }
  }
  //
  // onEvenEmit(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }
}
