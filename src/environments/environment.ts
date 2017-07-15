// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  app: {
    mapBase: 'http://localhost:9778/#'
  },
  firebase: {
    apiKey: "AIzaSyAbLH6E8owqokr3eefpUypyMzPW0E9cBbo",
    authDomain: "intense-torch-339.firebaseapp.com",
    databaseURL: "https://intense-torch-339.firebaseio.com",
    projectId: "intense-torch-339",
    storageBucket: "intense-torch-339.appspot.com",
    messagingSenderId: "570900012219"
  }
};
