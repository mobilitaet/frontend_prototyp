importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js');firebase.initializeApp({
    apiKey: "AIzaSyALvURJc8UfaIzU_hgTy5Ndmn_yaK3ZEC8",
    authDomain: "mobilitaetproto.firebaseapp.com",
    databaseURL: "https://mobilitaetproto.firebaseio.com",
    projectId: "mobilitaetproto",
    storageBucket: "mobilitaetproto.appspot.com",
    messagingSenderId: "702740206955",
    appId: "1:702740206955:web:3526f75acba06df7bbe82e"
});const messaging = firebase.messaging();

// importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

// firebase.initializeApp({
//   'messagingSenderId': '702740206955'
// });

// const messaging = firebase.messaging();