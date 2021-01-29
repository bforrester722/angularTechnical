// base class for a set of controls for inputs
export class InputBase<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  checked: boolean;
  validators: any;

  constructor(options: {
      value?: T;
      key?: string;
      label?: string;
      order?: number;
      controlType?: string;
      checked?: boolean;
      validators?: any;
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.checked    =  options.checked || false;
    this.validators = options.validators || [];
  }
}
