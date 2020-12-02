import * as firebase from 'firebase'

import 'firebase/auth';
var firebaseConfig = {
  apiKey: "AIzaSyDydRHxL8rblewejCJzbJg34MDqmTzTXEo",
  authDomain: "rncontactsharing.firebaseapp.com",
  databaseURL: "https://rncontactsharing.firebaseio.com",
  projectId: "rncontactsharing",
  storageBucket: "rncontactsharing.appspot.com",
  messagingSenderId: "38533611413",
  appId: "1:38533611413:web:facc6c7a02e7361e48409c"
};

firebase.initializeApp(firebaseConfig);

  export default firebase;