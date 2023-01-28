// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,

    firebaseConfig: {
        apiKey: 'AIzaSyCGCNZvaIXff37spEgZLt0-469cRqR2CY0',
        authDomain: 'hero-contacts-fd5e5.firebaseapp.com',
        projectId: 'hero-contacts-fd5e5',
        storageBucket: 'hero-contacts-fd5e5.appspot.com',
        messagingSenderId: '1043363699054',
        appId: '1:1043363699054:web:e75d618c3feb5774f8497f',
        measurementId: 'G-F05GS6496C',
    },
    backend_url: 'https://hero-contacts-fd5e5-default-rtdb.firebaseio.com/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
