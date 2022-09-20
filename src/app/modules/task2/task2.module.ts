import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { Task2RoutingModule } from './task2-routing.module';
import { ReverseWordsPipe } from './pipes';
import { HighlighterDirective } from './directives';
import { DirectivesPipesComponent } from './components/directives-pipes/directives-pipes.component';


@NgModule({
  declarations: [
    ReverseWordsPipe,
    HighlighterDirective,
    DirectivesPipesComponent
  ],
  imports: [
    CommonModule,
    Task2RoutingModule,
    FormsModule
  ]
})
export class Task2Module { }
