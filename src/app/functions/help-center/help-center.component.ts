import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [TranslocoModule, RouterModule, MatButtonModule],
  templateUrl: './help-center.component.html',
  styleUrl: './help-center.component.less'
})
export class HelpCenterComponent {

}
