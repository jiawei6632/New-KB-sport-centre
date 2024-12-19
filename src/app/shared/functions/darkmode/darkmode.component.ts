import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.less']
})
export class DarkmodeComponent {
  isDarkMode: boolean = false;

  @Output() darkModeChanged = new EventEmitter<boolean>();

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const element = document.querySelector('html');
    if (element) {
      element.classList.toggle('app-darkmode', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode ? 'true' : 'false');
    }
    this.darkModeChanged.emit(this.isDarkMode);
  }
  

  ngOnInit() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    this.isDarkMode = darkMode;
    if (darkMode) {
      document.querySelector('html')?.classList.add('app-darkmode');
    }
    this.darkModeChanged.emit(this.isDarkMode);
  }
}
