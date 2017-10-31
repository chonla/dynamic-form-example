import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionFormComponent } from './question-form.component';

const routes: Routes = [
  { path: 'question/:id', component: QuestionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
