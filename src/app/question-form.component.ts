import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html'
})

export class QuestionFormComponent {
  public document;
  public form;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.document = route.snapshot.paramMap.get('id');
    this.form = route.snapshot.paramMap.get('form');
  }
}
