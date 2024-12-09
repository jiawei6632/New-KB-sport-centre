import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslocoModule, RouterModule,MenubarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.less'
})
export class FooterComponent {
  YearDisplay: string = new Date().getFullYear().toString();
}
