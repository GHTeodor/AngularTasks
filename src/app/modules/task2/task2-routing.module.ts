import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DirectivesPipesComponent} from "./components/directives-pipes/directives-pipes.component";

const routes: Routes = [
  { path:'', component: DirectivesPipesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task2RoutingModule { }
