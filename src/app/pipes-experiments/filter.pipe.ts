import { Pipe, PipeTransform } from '@angular/core';
import {EnumServerStatus, IServer} from "../general-types/Server";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: IServer[], searchByParam: string): IServer[] | null {
    if(value.length === 0)
      return value;
    const resultArray: IServer[] = [];
    for(const item of value){
      if(EnumServerStatus[item.status].toLowerCase().startsWith(searchByParam))
        resultArray.push(item);
    }
    return resultArray;
  }

}
