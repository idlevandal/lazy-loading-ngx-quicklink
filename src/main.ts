import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  // .then(m => enableDebugTools(m.injector.get(ApplicationRef).components[0]))
  .catch(err => console.error(err));

// runs for 500ms 
// then in dev tools run: ng.profiler.timeChangeDetection();
