import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { usePreset } from '@primeng/themes';
// import { switchPreset } from '../../../../mypreset';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { Popover } from 'primeng/popover';

@Component({
  selector: 'app-theme',
  standalone: true,
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.less'],
  imports: [CommonModule, DividerModule, ButtonModule, Popover],
})
export class ThemeComponent implements OnInit {
  currentPreset = 'Aura'; // Default preset
  primaryBackgroundColor: string = '#60A5FA'; // Default primary color
  // surfaceBackgroundColor: string = '#FFFFFF'; // Default surface color
  isDarkMode: boolean = false;
  visible: boolean = false;

  constructor(private themeService: ThemeService) {}
  @Output() darkModeChanged = new EventEmitter<boolean>();

  // Primary Colors
  Primary = [
    // { color: '#22C55E', id: 'Green' },
    // { color: '#4ADE80', id: 'Light Green' },
    // { color: '#14B8A6', id: 'Aqua Blue' },
    // { color: '#06B6D4', id: 'Cyan' },
    // { color: '#3B82F6', id: 'Blue' },
    { color: '#60A5FA', id: 'Light Blue' },
    // { color: '#9333EA', id: 'Violet' },
    // { color: '#A855F7', id: 'Purple' },
    // { color: '#D946EF', id: 'Light Purple' },
    // { color: '#C084FC', id: 'Dark Purple' },
    // { color: '#EC4899', id: 'Pink' },
    // { color: '#F472B6', id: 'Light Pink' },
    // { color: '#FACC15', id: 'Yellow' },
    // { color: '#F97316', id: 'Orange' },
    // { color: '#EF4444', id: 'Red' },
    // { color: '#E11D48', id: 'Magenta' },
  ];

  // Surface Colors
  // Surface = [
  //   { color: '#4B5563', id: 'Dark Gray' },
  //   { color: '#6B7280', id: 'Medium Gray' },
  //   { color: '#9CA3AF', id: 'Light Gray' },
  //   { color: '#D1D5DB', id: 'Cool Gray' },
  //   { color: '#6D7075', id: 'Ash Gray' },
  //   { color: '#A0A2A7', id: 'Warm Gray' },
  //   { color: '#C3C4C8', id: 'Soft Gray' },
  // ];

  ngOnInit(): void {
    // Initialize the theme from ThemeService
    // this.themeService.preset$.subscribe(preset => {
    //   this.currentPreset = preset;
    //   const theme = switchPreset(preset);
    //   usePreset(theme);
    // });

    this.themeService.primaryColor$.subscribe(color => {
      this.primaryBackgroundColor = color;
    });

    // this.themeService.surfaceColor$.subscribe(color => {
    //   this.surfaceBackgroundColor = color;
    // });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('app-theme', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode ? 'true' : 'false');
    }
    this.darkModeChanged.emit(this.isDarkMode);
  }

  // // Change theme preset
  // changePreset(presetName: string) {
  //   this.currentPreset = presetName;
  //   const theme = switchPreset(presetName);
  //   usePreset(theme);

  //   // Save the preset
  //   this.themeService.updatePreset(presetName);
  // }

  // Update Primary color dynamically
  updatePrimaryColor(color: string) {
    this.themeService.updatePrimaryColor(color);
    this.primaryBackgroundColor = color;
  }

  // // Update Surface color dynamically
  // updateSurfaceColor(color: string) {
  //   this.themeService.updateSurfaceColor(color);
  //   this.surfaceBackgroundColor = color;
  // }
}
