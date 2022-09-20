import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { Task1RoutingModule } from './task1-routing.module';
import { ChildrenComponent } from './components/children/children.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    ChildrenComponent,
    ParentComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    Task1RoutingModule,
    ReactiveFormsModule
  ]
})
export class Task1Module { }
