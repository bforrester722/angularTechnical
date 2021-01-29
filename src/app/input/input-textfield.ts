import { InputBase } from './input-base';
// adds controlType textbox, used in input.service 
export class InputTextfield extends InputBase<string> {
  controlType = 'textbox';
}

