import { Component } from '@angular/core';
import { TranslocoComponent } from '../../functions/transloco/transloco.component';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [TranslocoComponent, TranslocoModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.less'
})
export class TermsComponent {

}
