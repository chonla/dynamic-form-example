import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DynamicFieldComponent } from './dynamic-field.component';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})

export class DynamicFormComponent implements OnInit {
  public fieldData;
  questionForm: FormGroup;
  @Input() document;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.questionForm = new FormGroup({});
  }

  ngOnInit() {
    this.http.get('http://localhost:8888/request/' + this.document + '.json')
      .toPromise()
      .then(r => this.setupForm(r), () => { alert('No such a question'); });
  }

  setupForm(r) {
    const fields = {};
    this.fieldData = r;
    for (let i = 0; i < r.fields.length; i++) {
      fields[r.fields[i].id] = [''];
    }
    this.questionForm = this.fb.group(fields);
  }

  onSubmit(form) {
    console.log(form.value);
  }
}
