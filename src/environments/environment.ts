// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiUrl: 'https://appbasicao.herokuapp.com',

  firebase: {
    apiKey: 'XXXXXXXXXXXXXXX',
    authDomain: 'appbasicao-33a2c.firebaseapp.com',
    databaseURL: 'https://appbasicao-33a2c.firebaseio.com',
    projectId: 'appbasicao-33a2c',
    storageBucket: 'appbasicao-33a2c.appspot.com',
    messagingSenderId: 'XXXXXXXXXXXXX',
    appId: 'XXXXXXXXXXXXXXXXXX',
    measurementId: 'XXXXXXXXXXXXXXXX'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
