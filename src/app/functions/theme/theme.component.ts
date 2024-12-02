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

  darkModeEnabled: boolean = false;
  checked: boolean = false;
  selectedTheme: string = 'lara-blue'; // Default to light theme

  ngOnInit(): void {
    let savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      this.selectedTheme = savedTheme;
      this.checked = savedTheme.includes('dark'); // Set dark mode based on saved theme
    }

    this.themeService.toggleDarkMode(this.checked);
    this.applyTheme(this.selectedTheme);
  }

  toggleDarkMode() {
    const theme = this.checked ? 'lara-blue-dark' : 'lara-blue';
    this.selectedTheme = theme;
    localStorage.setItem('selectedTheme', theme);

    this.applyTheme(theme);
    this.themeService.toggleDarkMode(this.checked);
  }

  applyTheme(themeId: string) {
    this.themeService.switchTheme(themeId);
    this.themeService.setSelectedTheme(themeId);
  }
}
