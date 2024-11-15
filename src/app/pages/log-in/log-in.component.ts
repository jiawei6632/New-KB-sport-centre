import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, CardModule, PasswordModule, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.less']
})
export class LogInComponent {
   LogInform: FormGroup;

   constructor() {
     this.LogInform = new FormGroup({
       Email: new FormControl('', [Validators.required, Validators.email]),
       Password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
       AgreeTerms: new FormControl(false, [Validators.requiredTrue])
     });
   }

   // Save function
   SaveUpdateClick() {
     if (this.LogInform.valid) {
       console.log('Form Data:', this.LogInform.value);
     } else {
       console.log('Form is invalid');
       alert('The form is either empty or contains invalid information. Please check the fields and try again.');
     }
   }

   // Reset form
   CancelClick() {
     this.LogInform.reset();
   }
}
