import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements AfterViewInit {
  @Input() firstColor: string = 'pink';
  @Input() secondColor: string = 'lightblue';
  @Input() thirdColor: string = 'lightyellow';

  constructor(private element: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.element.nativeElement.style.background = `linear-gradient(217deg, ${this.firstColor}, ${this.secondColor}, ${this.thirdColor} 70.71%)`;
    this.element.nativeElement.style.textShadow = 'red 1px 0 0';
    this.element.nativeElement.style.fontFamily = 'cursive';
  }
}
