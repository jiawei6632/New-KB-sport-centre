import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [TranslocoModule, RouterModule],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.less'
})
export class HelpCenterComponent {

}
