import { Component } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { TranslocoComponent } from "../../functions/transloco/transloco.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslocoComponent, TranslocoModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.less']
})
export class PrivacyPolicyComponent {
  constructor(private translocoService: TranslocoService) {}

  // Optionally, you can add methods to interact with the translation service
  changeLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }

  get currentLanguage(): string {
    return this.translocoService.getActiveLang();
  }
}
