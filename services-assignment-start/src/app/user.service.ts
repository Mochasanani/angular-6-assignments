import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // activeUsers: {name: string, activeCount: number; inactiveCount: number}[];
  // inactiveUsers: {name: string, activeCount: number; inactiveCount: number}[];
  activeUsers = [
    {
      name: 'Max',
      activeCount: 1,
      inactiveCount: 0
    },
    {
      name: 'Anna',
      activeCount: 1,
      inactiveCount: 0
    }
  ];
  inactiveUsers = [
    {
      name: 'Chris',
      activeCount: 0,
      inactiveCount: 1
    },
    {
      name: 'Manu',
      activeCount: 0,
      inactiveCount: 1
    }
  ];

  constructor() {
  }

  setToInactive(id: number) {
    var user = this.activeUsers.splice(id, 1)[0];
    user.inactiveCount += 1;
    this.inactiveUsers.push(user);
    console.log('User: '+ JSON.stringify(user));
    console.log('Active Users: ' + JSON.stringify(this.activeUsers));
    console.log('Inactive Users: ' + JSON.stringify(this.inactiveUsers));

  }

  setToActive(id: number) {
    var user = this.inactiveUsers.splice(id, 1)[0];
    user.activeCount += 1;
    this.activeUsers.push(user);
    console.log('User: '+ JSON.stringify(user));
    console.log('Active Users: ' + JSON.stringify(this.activeUsers));
    console.log('Inactive Users: ' + JSON.stringify(this.inactiveUsers));
  }

}
