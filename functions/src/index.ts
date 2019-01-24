import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
export const createPoll = functions.https.onRequest((req, res) => {
  res.send('Creating Poll');
});

export const makePayment = functions.https.onRequest((req, res) => {
  if (!req.body.card) {
    res.send('Missing card!');
  } else {
    res.send('Payment processed!');
  }
});
