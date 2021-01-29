import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { InputBase } from '../input/input-base';

@Injectable()

export class InputControlService {
  toFormGroup(inputs: InputBase<string>[] ) {
    const group: any = {};
    // for each input add validators if provided
    inputs.forEach(input => {
     	group[input.key] = input.validators ? new FormControl(input.value || '',  input.validators)
                                          : new FormControl(input.value || '');
    });
    return new FormGroup(group);
  }
}
