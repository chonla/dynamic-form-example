import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html'
})

export class QuestionFormComponent {
  public q;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.q = route.snapshot.paramMap.get('id');
  }
}
