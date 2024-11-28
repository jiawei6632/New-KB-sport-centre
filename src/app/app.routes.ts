import { Routes } from '@angular/router';
import { ManComponent } from './pages/man/man.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LayoutComponent } from './layout/layout.component';
import { NotfoundComponent } from './functions/notfound/notfound.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { PrivacyPolicyComponent } from './Law/privacy-policy/privacy-policy.component';
import { TermsComponent } from './Law/terms/terms.component';
import { BookingSearchComponent } from './pages/booking-search/booking-search.component';

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
            }
        ],
    },
    {
        path: '**',
        component: NotfoundComponent,
    },
];

