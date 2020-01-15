import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-first',
  templateUrl: './demo-first.component.html',
  styleUrls: ['./demo-first.component.scss']
})
export class DemoFirstComponent implements OnInit {
  cond = false;
  secVar: any = 'Second line';
  public forms: any;
  public favFood = '';
  public comment = '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForms();
  }

  public initForms(): void {
    this.forms = this.formBuilder.group({
      food: ['', Validators.required],
      comment: []
    });

    this.forms.get('food').valueChanges.subscribe(
      newValue => this.favFood = newValue
    );

    this.forms.get('comment').valueChanges.subscribe(
      newValue => this.comment = newValue
    );
  }

  public getError(type: string): string {
    let retVal = '';

    switch (type) {
      case 'food':
        retVal = this.forms.get('food').hasError('required') ? 'food is required' : '';
        break;
      default:
        break;
    }
    return retVal;
  }

  public onModelChange(type: any, event: any): void {
    switch (type) {
      case 'favFood':
        break;
    }
  }

}
