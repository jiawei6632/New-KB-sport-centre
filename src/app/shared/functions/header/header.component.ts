import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { ThemeComponent } from '../theme/theme.component';


@Component({
  standalone: true,
  imports: [
    MenubarModule,
    RouterModule,
    DropdownModule,
    FormsModule,
    CommonModule,
    TranslocoModule,
    ThemeComponent
],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  // Language options for the dropdown
  languageOptions = [
    { label: 'EN', value: 'en' },   
    { label: 'BM', value: 'ms' },  
    { label: '中文', value: 'zh' },
  ];

  // Default selected language
  selectedLanguage: string = 'EN'; 

  // Dropdown visibility flag
  isDropdownVisible = false;

  constructor(private translocoService: TranslocoService) {}

  // Change the active language
  changeLanguage(language: string): void {
    this.translocoService.setActiveLang(language);   // Set the internal language code
    this.selectedLanguage = this.languageOptions.find(option => option.value === language)?.label || 'EN';
    this.isDropdownVisible = true; 
  }

  // Toggle the visibility of the dropdown
  toggleDropdown(event: Event): void {
    event.stopPropagation();  // Prevent event from propagating
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
