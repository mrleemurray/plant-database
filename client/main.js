import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/ui/App.js';
import '../imports/startup/accounts-config.js';
 
Meteor.startup(() => {
  // navigator.serviceWorker.register('/sw.js') .then() .catch(error => console.log('ServiceWorker registration failed: ', err));
  render(<App />, document.getElementById('render-target'));
});