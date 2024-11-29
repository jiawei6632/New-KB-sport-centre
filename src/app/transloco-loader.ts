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
        const headerRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/header/${lang}.json`);
        const LogInRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/login/${lang}.json`);
        const SignUpRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/signup/${lang}.json`);
        const BookingSearchRequest = this.http.get<Translation>( `${environment.baseUrl}/assets/i18n/bookingSearch/${lang}.json`);
        const PrivacyPolicyRequest = this.http.get<Translation>(`${environment.baseUrl}/assets/i18n/privacyPolicy/${lang}.json`);
        const ContactRequest = this.http.get<Translation>( `${environment.baseUrl}/assets/i18n/contact/${lang}.json`);
    
        return forkJoin([termsRequest, headerRequest, LogInRequest, SignUpRequest, BookingSearchRequest, PrivacyPolicyRequest, ContactRequest]).pipe(
          map(([terms, header, login, signup, bookingSearch, privacyPolicy, contact]) => {
             return { ...terms, ...header, ...login, ...signup, ...bookingSearch, ...privacyPolicy, ...contact };
          })
        );
    }
}
