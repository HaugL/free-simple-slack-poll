"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.createPoll = functions.https.onRequest((req, res) => {
    res.send('Creating Poll');
});
exports.makePayment = functions.https.onRequest((req, res) => {
    if (!req.body.card) {
        res.send('Missing card!');
    }
    else {
        res.send('Payment processed!');
    }
});
//# sourceMappingURL=index.js.map