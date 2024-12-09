import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ThemeService } from '../../services/theme-service.service';

@Component({
  standalone: true,
  imports: [CommonModule, InputSwitchModule, FormsModule],
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeComponent implements OnInit {
  private themeService = inject(ThemeService);
  
  checked: boolean = false;
  selectedTheme: string = 'lara-blue'; // Default to light theme

  ngOnInit(): void {
    // Load saved theme and dark mode state
    let savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      this.selectedTheme = savedTheme;
      this.checked = savedTheme.includes('dark'); // Set dark mode based on saved theme
    }

    // Update the theme and dark mode state in the service
    this.themeService.toggleDarkMode(this.checked);
    this.applyTheme(this.selectedTheme);
  }

  toggleDarkMode() {
    // Update theme based on the dark mode toggle
    const theme = this.checked ? 'lara-blue-dark' : 'lara-blue';
    this.selectedTheme = theme;

    // Save selected theme to localStorage
    localStorage.setItem('selectedTheme', theme);

    // Apply theme and update dark mode state
    this.applyTheme(theme);
    this.themeService.setDarkMode(this.checked); // Update dark mode state in the service
  }

  applyTheme(themeId: string) {
    // Apply the selected theme and update the ThemeService
    this.themeService.switchTheme(themeId);
    this.themeService.setSelectedTheme(themeId);
  }
}
