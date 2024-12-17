import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reduce } from 'rxjs';
import { formReducer } from './state/form/form-reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(), provideState(formReducer), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
