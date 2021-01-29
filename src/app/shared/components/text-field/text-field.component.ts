import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../../../input/input-base';

@Component({
	selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})

// component for styling of text-field input
export class TextFieldComponent {
  @Input() input: InputBase<string>;
  @Input() form: FormGroup;

  // computes show-error class
  computeClass() {
  	if (!this.input) { return; }
  	const {touched, errors} = this.form.controls[this.input.key];
  	if (touched && errors) {
  		return 'show-error';
  	}
  }

}



