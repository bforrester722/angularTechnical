import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../../../input/input-base';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

// component for styling of checkbox input
export class CheckboxComponent implements OnInit {

  @Input() input: InputBase<string>;
  @Input() form: FormGroup;

  ngOnInit() {
  	// sets checked property of checkbox based on data from input.service
  	const {key, checked} = this.input;
  	this.form.controls[key].setValue(checked);
  }

}
