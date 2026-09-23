import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [ // providers son configuraciones/dependencias que Angular pone a disposición de la aplicación.
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Esta aplicación va a utilizar el sistema de routing y estas son sus rutas.
    provideHttpClient() // Esta aplicación va a utilizar HttpClient para hacer peticiones HTTP. Gracias a esta configuracion se inyecta donde es llamado
  ]
};
