import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substrpipe'
})
export class SubstrpipePipe implements PipeTransform {

  transform(value: string):string {
    return value?.length > 200 ? value.substr(0,300) + "..." : value
  }

}

