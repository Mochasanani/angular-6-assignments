import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortServer'
})
export class SortServerPipe implements PipeTransform {

  transform(servers: any, args: any): any {
    servers.sort(function(a, b) {
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
    return servers;
  }

}
