import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputBase }  from '../input/input-base';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class InputService {

  // returns inputs sorted by order number to build form
  getInputs() {

    const inputs: InputBase<string>[] = [

      new InputBase({
        controlType: 'textbox', //for type of input
        key:         'name', //for data manuplation
        label:       'Name', //for display purposes
        validators:  [Validators.required], //for valadation   
        order:       1 //for sorting
      }),

      new InputBase({
        controlType: 'textbox',
        key:         'email',
        label:       'Email',
        order:       2,
        validators:  [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      }),

      new InputBase({
        controlType: 'textbox',
        key:         'message',
        label:       'Message',
        order:       3,
        validators:  [Validators.required],
      }),

      new InputBase({
        controlType: 'checkbox',
        checked:     true, //for setting checkbox
        key:         'shouldAddToNewsLetter',
        label:       'News Letter',
        order:       4
      })
    ];

    return Observable.of(inputs.sort((a, b) => a.order - b.order));
  }
}
