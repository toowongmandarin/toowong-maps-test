export const environment = {
  production: true,
  app: {
    title: "Macgregor Ministry Maps 2.8",
    mapBase: 'https://macgregor.jwapp.xyz/#'
  },
  firebase: {
    apiKey: "AIzaSyCjArW7DreGKLfBes3RXS_-z9B1ICQX5KE",
    authDomain: "congmap-prod.firebaseapp.com",
    databaseURL: "https://congmap-prod.firebaseio.com",
    projectId: "congmap-prod",
    storageBucket: "congmap-prod.appspot.com",
    messagingSenderId: "232314776603"
  },
  version: {
    current: '2.8',
    list: ['2.8', '2.7.1', '2.7'],
    details: {
      '2.8': 'Added territory coverage information to the home page. Added release notes to the menu, logout button now part of the menu.',
      '2.7.1': 'Fixed map sharing feature.',
      '2.7': 'Campaign mode added. For map updaters, completed maps are now grayed out and cannot be easily started.'
    }
  }
};
