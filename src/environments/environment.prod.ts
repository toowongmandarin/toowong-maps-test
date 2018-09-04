export const environment = {
  production: true,
  app: {
    title: "Macgregor Ministry Maps",
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
    current: '2.89.1',
    list: ['2.89.1','2.89','2.88','2.87', '2.86','2.85', '2.84', '2.83', '2.82', '2.8.1', '2.8', '2.7.1', '2.7'],
    details: {
      '2.89.1': 'Remove not-at-homes on campaign mode',
      '2.89': 'Last used on chip now shows the day of the week, as well as the time.',
      '2.88': 'Added more updater features',
      '2.87': 'Fixed status issue',
      '2.86': 'Improved in-app map links, search maps are no longer limited to being visited twice, and are now processed semi-automatically. Added address queues.',
      '2.85': 'Supports language surveys when marking addresses as "Done".',
      '2.84': 'Allowed setting of ownership on started maps. Added tag for personal territories. Added notes field for map updaters.',
      '2.83': 'Added personal territory flag when assigning ownership. Added link to Google Maps from address list. ',
      '2.82': 'Address list dialog now allows editing of addresses. Improved progress report.',
      '2.8.1': 'Improved progress report information.',
      '2.8': 'Added territory coverage information to the home page. Added release notes to the menu, logout button now part of the menu.',
      '2.7.1': 'Fixed map sharing feature.',
      '2.7': 'Campaign mode added. For map updaters, completed maps are now grayed out and cannot be easily started.'
    }
  }
};
