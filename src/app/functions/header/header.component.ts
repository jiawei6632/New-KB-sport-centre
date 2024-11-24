import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ManComponent } from '../../pages/man/man.component';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { TranslocoService } from '@ngneat/transloco'; // Import Transloco service
import { DropdownModule } from 'primeng/dropdown'; // Import Dropdown module
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [
    MenubarModule,
    RouterModule,
    ManComponent,
    DropdownModule,
    FormsModule,
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  languageOptions = [
    { label: 'English', value: 'en' },
    { label: '中文', value: 'zh' },
    { label: 'Spanish', value: 'es' },
  ];

  selectedLanguage: string = 'en'; // Default language

  constructor(private translocoService: TranslocoService) {}

  // Change language method
  changeLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
  }

  // This method toggles the dropdown visibility
  toggleDropdown(event: Event): void {
    // Prevent the default behavior and stop the event propagation
    event.stopPropagation();
    const dropdownElement = document.querySelector('.p-dropdown') as HTMLElement;
    if (dropdownElement) {
      dropdownElement.classList.toggle('p-dropdown-overlay-visible');
    }
  }
}
