const { onRequest } = require('firebase-functions/v2/https');
const admin = require('firebase-admin');

admin.initializeApp();

exports.helloWorld = onRequest((request, response) => {
  response.send('Hello from Firebase!');
});
