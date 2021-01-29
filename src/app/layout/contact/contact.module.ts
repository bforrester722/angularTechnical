import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
// custom components
import { TextFieldComponent } from '../../shared/components/text-field/text-field.component';
import { CheckboxComponent } from '../../shared/components/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  declarations: [
    ContactComponent,
    TextFieldComponent,
    CheckboxComponent
  ],
  providers: []
})
export class ContactModule { }
