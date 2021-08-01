// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyA0Ratgkb6-SARszea-lzHniNTRvxKK5Tg",
    authDomain: "taller-de-ajedrez-12741.firebaseapp.com",
    databaseURL: "https://taller-de-ajedrez-12741.firebaseio.com",
    projectId: "taller-de-ajedrez-12741",
    storageBucket: "taller-de-ajedrez-12741.appspot.com",
    messagingSenderId: "403845558025",
    appId: "1:403845558025:web:eac6a72813df605c792dd8"
  },
  auth0Config: {
    domain: 'dev-8inylkcf.auth0.com',
    clientId: '0KJeb3VfxI3qndG4FJAWmjnGJaY6SuGT'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
