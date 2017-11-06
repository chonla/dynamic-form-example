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
  public fields;
  questionForm: FormGroup;
  @Input() document;
  @Input() form;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.questionForm = new FormGroup({});
  }

  ngOnInit() {
    this.http.get('http://localhost:8888/form/' + this.form + '.json')
      .toPromise()
      .then(r => this.setupForm(r), () => { alert('No such form'); });
    this.http.get('http://localhost:8888/' + this.form + '/' + this.document + '.json')
      .toPromise()
      .then(r => this.populateData(r), () => { alert('No such document'); });
  }

  setupForm(fields) {
    this.fields = fields;
  }

  populateData(r) {
    const form = {};
    this.fieldData = r;
    console.log('r', this.fieldData);
    for (let i = 0; i < this.fields.length; i++) {
      const key = this.fields[i].name;
      const field = r.fields.find((f) => f.id === key);
      form[key] = [field.value];
    }
    console.log('form', form);
    this.questionForm = this.fb.group(form);
  }

  onSubmit() {
    console.log(JSON.stringify(this.questionForm.value));
  }
}
