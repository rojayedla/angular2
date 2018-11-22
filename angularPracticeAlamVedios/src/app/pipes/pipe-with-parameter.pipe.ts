import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingsPipe'
})
export class PipeWithParameterPipe implements PipeTransform {

  transform(value: string, beforeStr: string, afterStr: string): string {
    let resultVal = beforeStr + '' + value + ''+afterStr;
    return resultVal;
  }

}
