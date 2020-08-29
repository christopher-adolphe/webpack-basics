import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const AppModule = require('./app/app.module');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(error => console.log(error));
