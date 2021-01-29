import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputBase } from '../input/input-base';
import { InputTextfield } from '../input/input-textfield';
import { InputCheckbox } from '../input/input-checkbox';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class InputService {

  // returns inputs sorted by order number to build form
  getInputs() {

    const inputs: InputBase<string>[] = [

      new InputTextfield({
        key:        'name', //for data manuplation
        label:      'Name', //for display purposes
        validators: [Validators.required], //for valadation   
        order:      1 //for sorting
      }),

      new InputTextfield({
        key:        'email',
        label:      'Email',
        order:      2,
        validators: [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      }),

      new InputTextfield({
        key:        'message',
        label:      'Message',
        order:      3,
        validators: [Validators.required],
      }),

      new InputCheckbox({
        key:     'shouldAddToNewsLetter',
        label:   'News Letter',
        checked: true, //for setting checkbox
        order:   4
        
      })
    ];

    return Observable.of(inputs.sort((a, b) => a.order - b.order));
  }
}
