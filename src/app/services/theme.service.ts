import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private primaryColorSubject = new BehaviorSubject<string>('#3F51B5'); 
  private surfaceColorSubject = new BehaviorSubject<string>('#FFFFFF'); 
  private presetSubject = new BehaviorSubject<string>('Aura'); 
  private darkModeSubject = new BehaviorSubject<boolean>(false);

  primaryColor$ = this.primaryColorSubject.asObservable();
  surfaceColor$ = this.surfaceColorSubject.asObservable();
  preset$ = this.presetSubject.asObservable();
  darkMode$ = this.darkModeSubject.asObservable();

  constructor() {
    // Initialize theme from localStorage if available
    const savedPrimaryColor = localStorage.getItem('primaryColor');
    const savedSurfaceColor = localStorage.getItem('surfaceColor');
    const savedPreset = localStorage.getItem('themePreset');
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedPrimaryColor) {
      this.primaryColorSubject.next(savedPrimaryColor);
      this.applyPrimaryColorToCSS(savedPrimaryColor);
    }
    if (savedSurfaceColor) {
      this.surfaceColorSubject.next(savedSurfaceColor);
      this.applySurfaceColorToCSS(savedSurfaceColor);
    }
    if (savedPreset) {
      this.presetSubject.next(savedPreset);
    }
    if (savedDarkMode) {
      const isDarkMode = savedDarkMode === 'true';
      this.darkModeSubject.next(isDarkMode);
      this.applyDarkModeToCSS(isDarkMode);
    }
  }

  updatePrimaryColor(color: string): void {
    this.primaryColorSubject.next(color);
    localStorage.setItem('primaryColor', color); 
    this.applyPrimaryColorToCSS(color);
  }

  updateSurfaceColor(color: string): void {
    this.surfaceColorSubject.next(color);
    localStorage.setItem('surfaceColor', color); 
    this.applySurfaceColorToCSS(color);
  }

  updatePreset(preset: string): void {
    this.presetSubject.next(preset);
    localStorage.setItem('themePreset', preset); 
  }

  updateDarkMode(isDarkMode: boolean): void {
    this.darkModeSubject.next(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString());
    this.applyDarkModeToCSS(isDarkMode);
  }

  isDarkMode(): boolean {
    return this.darkModeSubject.value;
  }

  private applyPrimaryColorToCSS(color: string) {
    document.documentElement.style.setProperty('--primary-color', color);
  }

  private applySurfaceColorToCSS(color: string) {
    document.documentElement.style.setProperty('--surface-color', color);
  }

  private applyDarkModeToCSS(isDarkMode: boolean): void {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('app-theme');
    } else {
      htmlElement.classList.remove('app-theme');
    }
  }
}
