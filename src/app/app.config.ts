import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // Importamos withInMemoryScrolling

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes, 
      // Esta es la configuración que restaura el scroll al inicio en cada navegación
      withInMemoryScrolling({ 
        scrollPositionRestoration: 'top' 
      })
    ),
  ]
}