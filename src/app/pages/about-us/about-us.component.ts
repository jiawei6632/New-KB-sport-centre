import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TranslocoModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.less'
})
export class AboutUsComponent {

}
