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
        initialCountry: 'my', // Set default country to Malaysia (+60)
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
        alert('Phone number is invalid or empty.');
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
        alert('Error parsing phone number: ' + error.message);
      }
      
    }
  
    if (this.Contactform.valid) {
      console.log('Form Data:', this.Contactform.value);
    } else {
      console.log('Form is invalid');
      alert('The form is either empty or contains invalid information. Please check the fields and try again.');
    }
  }
  

  CancelClick() {
    this.Contactform.reset();
  }
}
