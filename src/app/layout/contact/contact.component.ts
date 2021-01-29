import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputService } from '../../services/input.service';
import { InputControlService } from '../../services/input-control.service';
import { InputBase } from '../../input/input-base';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [InputService, InputControlService]
})

export class ContactComponent implements OnInit {
  
  inputs:  InputBase<string>[];
  form:    FormGroup;
  payLoad: Object;

  // constructs services 
  constructor(service: InputService, private ics: InputControlService) {
    // gets Inputs fron input.service
    service.getInputs().subscribe((inputs: any) => {
			this.inputs = inputs;
    });
  }

  
  ngOnInit() {
  	// Sets up form with inputs
    this.form = this.ics.toFormGroup(this.inputs);
  }
  
  // converts form data to json string, rests form, and clears payLoad 
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.form.reset();
    setTimeout(()=>{                         
      this.payLoad = undefined;
    }, 2000);
  }
}




