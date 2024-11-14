import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeComponent } from './functions/theme/theme.component.js';
import { ManComponent } from './pages/man/man.component.js';
import { HeaderComponent } from './functions/header/header.component.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ThemeComponent, ManComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'routing-app';
}