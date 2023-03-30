import { enableProdMode, LOCALE_ID } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function getBaseUrl() {
  return environment.apiViaCep;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: LOCALE_ID, useValue: 'pt-BR' },
];

platformBrowserDynamic(providers)
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
