// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    //TODO
    FORM_SUBMIT_REDIRECT_URL: 'https://becayesoft.github.io/',

    firebase: {
        apiKey: "",
        authDomain: "becayesoft-portfolio-blog.firebaseapp.com",
        projectId: "becayesoft-portfolio-blog",
        storageBucket: "becayesoft-portfolio-blog.appspot.com",
        messagingSenderId: "42609102571",
        appId: "1:42609102571:web:f60670a465546071fbf8ae",
        measurementId: "G-W60VQL478S"
    },

    openai: {
        API_KEY: '', // Use environment variable if available locally
    },

};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
