import { InputBase } from './input-base';
// adds controlType checkbox, used in input.service 
export class InputCheckbox extends InputBase<string> {
  controlType = 'checkbox';
}

