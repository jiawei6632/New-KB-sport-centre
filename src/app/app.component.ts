import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ManComponent } from './pages/man/man.component.js';
import { HeaderComponent } from './functions/header/header.component.js';
import { LayoutComponent } from "./layout/layout.component";
import { PersonalDetailsComponent } from "./pages/personal-details/personal-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ManComponent, HeaderComponent, LayoutComponent, PersonalDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'routing-app';
}
