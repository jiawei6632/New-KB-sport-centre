import { Routes } from '@angular/router';
import { ManComponent } from './pages/man/man.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
// import { NotfoundComponent } from './functions/notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'man', 
        component: ManComponent,
        children: [
            {
                path: 'log-in',
                component: LogInComponent,
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
            },
        ],
    },
    // { path: '',   redirectTo: '/man.component', pathMatch: 'full' },
    // { path: '**', component: NotfoundComponent },
];
