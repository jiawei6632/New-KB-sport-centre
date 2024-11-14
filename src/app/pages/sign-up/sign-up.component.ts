import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, CardModule, PasswordModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent {
   SignUpform: FormGroup;

   constructor() {
     this.SignUpform = new FormGroup({
       email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
       agreeTerms: new FormControl(false, [Validators.requiredTrue])
     });
   }

   // Save function
   SaveUpdateClick() {
     if (this.SignUpform.valid) {
       console.log('Form Data:', this.SignUpform.value);
     } else {
       console.log('Form is invalid');
       alert('The form is either empty or contains invalid information. Please check the fields and try again.');
     }
   }

   // Reset form
   CancelClick() {
     this.SignUpform.reset();
   }
}
