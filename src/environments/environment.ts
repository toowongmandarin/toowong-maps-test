// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  app: {
    title: "Macgregor Ministry Maps",
    mapBase: 'http://localhost:4200/'
  },
  firebase: {
    apiKey: "AIzaSyAbLH6E8owqokr3eefpUypyMzPW0E9cBbo",
    authDomain: "intense-torch-339.firebaseapp.com",
    databaseURL: "https://intense-torch-339.firebaseio.com",
    projectId: "intense-torch-339",
    storageBucket: "intense-torch-339.appspot.com",
    messagingSenderId: "570900012219"
  },
  version: {
    current: '2.82',
    list: ['2.82', '2.8.1','2.8', '2.7.1', '2.7'],
    details: {
      '2.82': 'Address list dialog now allows editing of addresses. Improved progress report.',
      '2.8.1': 'Improved progress report information.',
      '2.8': 'Added territory coverage information to the home page. Added release notes to the menu, logout button now part of the menu.',
      '2.7.1': 'Fixed map sharing feature.',
      '2.7': 'Campaign mode added. For map updaters, completed maps are now grayed out and cannot be easily started.'
    }
  }
};
