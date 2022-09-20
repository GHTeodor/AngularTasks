import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements AfterViewInit {
  @ViewChild('badge') badge!: ElementRef;

  @Input() badgeSrc!: string;
  @Input() title!: string;
  @Input() buttonText!: string;

  @Output() changeParent = new EventEmitter;

  ngAfterViewInit(): void {
    if (this.badge) {
      this.badge.nativeElement.setAttribute("src", `${this.badgeSrc}.png`);
    }
  }

  click(): void {
    this.changeParent.emit();
  }
}
