import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-transloco',
  templateUrl: './transloco.component.html',
  styleUrls: ['./transloco.component.css']
})
export class TranslocoComponent {

  constructor(private translocoService: TranslocoService) {}

  // Switch language dynamically
  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);  // Switch the active language
  }
}
