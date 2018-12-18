// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:    {
      apiKey: 'AIzaSyD-lV5JS_XBiYRwj-hL8jfjpjqF1Z9WYW4',
      authDomain: 'fir-curd-3addc.firebaseapp.com',
      databaseURL: 'https://fir-curd-3addc.firebaseio.com',
      projectId: 'fir-curd-3addc',
      storageBucket: 'fir-curd-3addc.appspot.com',
      messagingSenderId: '304544609630'
    }

};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
