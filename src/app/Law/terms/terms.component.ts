import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.less'],
})
export class TermsComponent {

}
