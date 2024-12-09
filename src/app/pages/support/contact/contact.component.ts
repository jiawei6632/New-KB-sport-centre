import { Component, ViewEncapsulation, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TranslocoModule } from '@ngneat/transloco';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
import intlTelInput from 'intl-tel-input'; // Correct import statement

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, CardModule, RouterModule, CommonModule, TranslocoModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
})
export class ContactComponent implements AfterViewInit {
  Contactform: FormGroup;

  @ViewChild('phoneInput') phoneInput!: ElementRef;

  constructor() {
    this.Contactform = new FormGroup({
      Name: new FormControl<string>('', [Validators.required]),
      Email: new FormControl<string>('', [Validators.required, Validators.email]),
      PhoneNumber: new FormControl<string>('', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]),
      Message: new FormControl<string>('', [Validators.required]),
    });
  }

  ngAfterViewInit() {
    const input = this.phoneInput.nativeElement;

    // Dynamically load the utils script
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js';
    script.onload = () => {
      // Initialize intl-tel-input after the utils script is loaded
      const iti = intlTelInput(input, {
        initialCountry: '', // Set default country to Malaysia (+60)
      });

      // Ensure the phone number field displays the correct country code on load
      const defaultCountryCode = iti.getSelectedCountryData().dialCode;
      input.value = `+${defaultCountryCode}`;
      this.Contactform.get('PhoneNumber')?.setValue(`+${defaultCountryCode}`);

      // Listen for country change event by using the input element's event
      input.addEventListener('countrychange', () => {
        // Get the selected country code
        const countryCode = iti.getSelectedCountryData().dialCode;
        // Set the phone input value with the country code
        input.value = `+${countryCode}`;
        // Update the form control value
        this.Contactform.get('PhoneNumber')?.setValue(input.value);
      });

      // Listen for blur event to set the phone number in the form control
      input.addEventListener('blur', () => {
        const phoneNumber = iti.getNumber(); // Get the full phone number with country code
        if (phoneNumber) {
          this.Contactform.get('PhoneNumber')?.setValue(phoneNumber);
        }
      });
    };
    document.body.appendChild(script);
  }

  SaveUpdateClick() {
    if (this.Contactform.valid) {
      const phoneUtil = PhoneNumberUtil.getInstance();

      let phoneNumber = this.Contactform.get('PhoneNumber')?.value;

      if (!phoneNumber || phoneNumber === "") {
        alert('Invalid or empty phone number.');
        return;
      }

      try {
        const parsedInput = phoneUtil.parseAndKeepRawInput(phoneNumber);
        
        if (phoneUtil.isValidNumber(parsedInput)) {
          const parsedNumber = phoneUtil.format(parsedInput, PhoneNumberFormat.E164);

          if (this.Contactform.get('PhoneNumber')?.value !== parsedNumber) {
            this.Contactform.get('PhoneNumber')?.setValue(parsedNumber);
          }
        } else {
          alert('Invalid phone number.');
        }
      } catch (error: any) { 
        alert(error.message);
      }
    }

    if (this.Contactform.valid) {
      console.log('Form data:', this.Contactform.value);
    } else {
      console.log('Form is invalid');
      alert('The form is empty or contains invalid information. Please check the fields and try again.');
    }
  }

  CancelClick() {
    this.Contactform.reset();
  }
}
