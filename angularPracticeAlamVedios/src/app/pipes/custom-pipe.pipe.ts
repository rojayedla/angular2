import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class CustomPipePipe implements PipeTransform {

  transform(value) {
    return value*value;
  }

}
