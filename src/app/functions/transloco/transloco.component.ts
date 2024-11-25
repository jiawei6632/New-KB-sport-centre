import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'app-transloco',
  templateUrl: './transloco.component.html',
  styleUrls: ['./transloco.component.less'],
  imports: [CommonModule]
})
export class TranslocoComponent {
  // Language options for the dropdown
  languageOptions = [
    { label: 'English', value: 'en' },
    { label: '中文', value: 'zh' },
    { label: 'Melayu', value: 'ms' },
  ];

  // Default selected language
  selectedLanguage: string = 'en';

  // Dropdown visibility flag
  isDropdownVisible = false;

  constructor(private translocoService: TranslocoService) {}

  // Change the active language
  changeLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
    this.selectedLanguage = language;
    this.isDropdownVisible = false; // Close the dropdown after selection
  }

  // Toggle the visibility of the dropdown
  toggleDropdown(event: Event): void {
    event.stopPropagation();  // Prevent event from propagating
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
