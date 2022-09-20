import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'task1', pathMatch: 'full' },
  { path: 'task1', loadChildren: () => import('./modules').then(m => m.Task1Module) },
  { path: 'task2', loadChildren: () => import('./modules').then(m => m.Task2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
