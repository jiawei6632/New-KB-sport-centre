import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { switchPreset } from '../mypreset';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['zh', 'en', 'ms'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      }),
      provideAnimations(), 
      provideAnimationsAsync(),
      providePrimeNG({
        theme: {
          preset: switchPreset('Aura'),
          options: {
            prefix: 'my',
            darkModeSelector: '.app-theme',
            cssLayer: {
              name: 'primeng',
              order: 'app-theme, primeng'
            },
          },
        }
      }),]
};
