import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { forkJoin, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string): Observable<Translation> {
        const termsRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/terms/${lang}.json`);
        const privacyPolicyRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/privacyPolicy/${lang}.json`);
        const headerRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/header/${lang}.json`);
        const LogInRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/login/${lang}.json`);
        const SignUpRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/signup/${lang}.json`);
    
        return forkJoin([termsRequest, privacyPolicyRequest, headerRequest, LogInRequest, SignUpRequest]).pipe(
          map(([terms, privacyPolicy, header, login, signup]) => {
             return { ...terms, ...privacyPolicy, ...header, ...login, ...signup };
          })
        );
    }
}
