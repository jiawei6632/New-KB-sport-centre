import { Routes } from '@angular/router';
import { ManComponent } from './pages/man/man.component';
import { LogInComponent } from './pages/logup/log-in/log-in.component';
import { SignUpComponent } from './pages/logup/sign-up/sign-up.component';
import { LayoutComponent } from './functions/layout/layout.component';
import { NotfoundComponent } from './functions/notfound/notfound.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { PrivacyPolicyComponent } from './pages/legal/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/legal/terms/terms.component';
import { BookingSearchComponent } from './pages/booking/booking-search/booking-search.component';
import { ContactComponent } from './pages/support/contact/contact.component';
import { FaqComponent } from './pages/support/faq/faq.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HelpCenterComponent } from './functions/help-center/help-center.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: ManComponent,
            },
            {
                path: 'log-in',
                component: LogInComponent,
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
            },
            {
                path: 'personal-details',
                component: PersonalDetailsComponent,
            },
            {
                path: 'privacy-policy',
                component: PrivacyPolicyComponent,
            },
            {
                path: 'terms',
                component: TermsComponent,
            },
            {
                path: 'booking-search',
                component: BookingSearchComponent,
            },
            {
                path: 'contact',
                component: ContactComponent,
            },
            {
                path: 'faq',
                component: FaqComponent,
            },
            {
                path: "about-us",
                component: AboutUsComponent,
            },
            {
                path: "help-center",
                component: HelpCenterComponent
            }
        ],
    },
    {
        path: '**',
        component: NotfoundComponent,
    },
];
