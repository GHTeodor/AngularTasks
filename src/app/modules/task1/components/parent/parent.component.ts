import { Component, ElementRef, ViewChild } from '@angular/core';

import { Child } from "../../interfaces";

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  @ViewChild('addAdditionalContent') addAdditionalContent!:ElementRef;
  @ViewChild('parentComponent') parentComponent!: ElementRef;
  @ViewChild('parentTitle') parentTitle!: ElementRef;

  child: Child = {
    title: "Child title",
    badgePath: "../../../assets/images/task1/"
  }

  colours: string[] = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
  fonts: string[] = ["Arial", "Verdana", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Brush Script MT"];

  random(array: string[]): string {
    const random = Math.round(Math.random() * (array.length - 1));

    return array[random];
  }

  setRandomTextShadowForParentTitle(): void {
    this.parentTitle.nativeElement.style.textShadow = `${this.random(this.colours)} 2px 5px 10px`;
  }

  setRandomColourForParentTitle(): void {
    this.parentTitle.nativeElement.style.color = this.random(this.colours);
  }

  setRandomBackgroundColourForParentComponent(): void {
    this.parentComponent.nativeElement.style.backgroundColor = this.random(this.colours);
  }

  setRandomFontForParentTitle(): void {
    this.parentTitle.nativeElement.style.fontFamily = this.random(this.fonts);
  }

  setAdditionalContent(content: string): void {
    this.addAdditionalContent.nativeElement.innerText = content;
  }
}
