import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TranslocoModule } from '@ngneat/transloco';
import { PhonenumberinputComponent } from 'fxt-input-phone-num';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, CardModule, RouterModule, CommonModule, TranslocoModule, PhonenumberinputComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ContactComponent {
  Contactform: FormGroup;

  constructor() {
    this.Contactform = new FormGroup({
      Name: new FormControl<string>('', [Validators.required]),
      Email: new FormControl<string>('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl<string>('', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]),
      Message: new FormControl<string>('', [Validators.required]),
    });
  }

  // Save function
  SaveUpdateClick() {
    if (this.Contactform.valid) {
      const phoneUtil = PhoneNumberUtil.getInstance();
      //Format Phone Number before send
      if (this.Contactform.get('PhoneNumber')?.value) {
        let phoneNumber = (this.Contactform.get('PhoneNumber')?.value as string).startsWith('+') ? this.Contactform.get('PhoneNumber')?.value : '+' + this.Contactform.get('PhoneNumber')?.value;
  
        let parsedInput = phoneUtil.parseAndKeepRawInput(phoneNumber);
  
        if (phoneUtil.isValidNumber(parsedInput)) {
          const parsedNumber = phoneUtil.format(parsedInput, PhoneNumberFormat.E164);
          if (this.Contactform.get('PhoneNumber')?.value !== parsedNumber) this.Contactform.get('PhoneNumber')?.setValue(parsedNumber);
        }
      }
    }

    if (this.Contactform.valid) {
      console.log('Form Data:', this.Contactform.value);
    } else {
      console.log('Form is invalid');
      alert('The form is either empty or contains invalid information. Please check the fields and try again.。');
    }
  }

  // Reset form
  CancelClick() {
    this.Contactform.reset();
  }
}
