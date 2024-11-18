import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
// import { ThemeComponent } from '../theme/theme.component';
import { PrimeIcons, MenuItem } from 'primeng/api';
// import { LoginBtnComponent } from '../login-btn/login-btn.component';
// import { ProfileComponent } from '../profile/profile.component';
// import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [
    MenubarModule,
    RouterModule,
    // ThemeComponent,
    // SidebarComponent,
    // LoginBtnComponent,
    // ProfileComponent,
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {}
