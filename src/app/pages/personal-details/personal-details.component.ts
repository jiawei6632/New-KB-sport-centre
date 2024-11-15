import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown'
import { ToolbarModule } from 'primeng/toolbar';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-personal-details',
  standalone: true,
  imports: [CardModule, CalendarModule, DropdownModule, ButtonModule, ReactiveFormsModule, ToolbarModule, AvatarGroupModule, AvatarModule, CommonModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.less'
})
export class PersonalDetailsComponent {
  private activeRoute = inject(ActivatedRoute);

  isEditingName = false;
  isEditingDisplayName = false;
  isEditingEmail = false;
  isEditingPhone = false;
  isEditingDateOfBirth = false;
  isEditingGender = false;
  isEditingAddress = false;
  isEditingPassword = false;
  personalDForm: FormGroup;

  constructor(){
    this.personalDForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      DisplayName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      PhoneNum: new FormGroup('', [Validators.required]),
      Birthday: new FormGroup('', [Validators.required]),
      Gender: new FormGroup('', [Validators.required]),
      Address: new FormGroup('', [Validators.required]),
      ChangePassword: new FormGroup('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    })
  }

  toggleEdit(field: string) {
    switch (field) {
      case 'Name': this.isEditingName = !this.isEditingName; break;
      case 'DisplayName': this.isEditingDisplayName = !this.isEditingDisplayName; break;
      case 'Email': this.isEditingEmail = !this.isEditingEmail; break;
      case 'PhoneNumber': this.isEditingPhone = !this.isEditingPhone; break;
      case 'DateOfBirth': this.isEditingDateOfBirth = !this.isEditingDateOfBirth; break;
      case 'Gender': this.isEditingGender = !this.isEditingGender; break;
      case 'Address': this.isEditingAddress = !this.isEditingAddress; break;
      case 'ChangePassword': this.isEditingPassword = !this.isEditingPassword; break;
    }
  }

  SaveUpdateClick() {
    if (this.personalDForm.valid) {
      const phoneUtil = PhoneNumberUtil.getInstance();
      //Format Phone Number before send
      if (this.personalDForm.get('PhoneNumber')?.value) {
        let phoneNumber = (this.personalDForm.get('PhoneNumber')?.value as string).startsWith('+') ? this.personalDForm.get('PhoneNumber')?.value : '+' + this.personalDForm.get('PhoneNumber')?.value;
  
        let parsedInput = phoneUtil.parseAndKeepRawInput(phoneNumber);
  
        if (phoneUtil.isValidNumber(parsedInput)) {
          const parsedNumber = phoneUtil.format(parsedInput, PhoneNumberFormat.E164);
          if (this.personalDForm.get('PhoneNumber')?.value !== parsedNumber) this.personalDForm.get('PhoneNumber')?.setValue(parsedNumber);
        }
      }
    }
  }

}
