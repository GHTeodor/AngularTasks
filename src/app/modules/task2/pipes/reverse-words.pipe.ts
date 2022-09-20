import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseWords'
})
export class ReverseWordsPipe implements PipeTransform {

  transform(value: string, fullReverse: boolean = false): string {
    return value
      ? fullReverse
        ? value.split("").reverse().join("") // fullReverse === true
        : value.split(" ").reverse().join(" ")
      : ""; // if (!value)
  }
}
