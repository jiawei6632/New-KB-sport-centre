import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ManComponent } from '../../pages/man/man.component';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslocoComponent } from '../transloco/transloco.component';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  imports: [
    MenubarModule,
    RouterModule,
    ManComponent,
    DropdownModule,
    FormsModule,
    CommonModule,
    TranslocoComponent,
    TranslocoModule,
  ],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  
}
