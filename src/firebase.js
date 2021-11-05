import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBE3ccPVcn-qOQ-0wsxeTgbMXCu-1_T2P8",
    authDomain: "netflix-build-cl.firebaseapp.com",
    projectId: "netflix-build-cl",
    storageBucket: "netflix-build-cl.appspot.com",
    messagingSenderId: "811203475463",
    appId: "1:811203475463:web:f718ef942dbad8d59152a2",
    measurementId: "G-89WNDJ791L"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  const auth=firebaseApp.auth();

  export {auth}
  export default db;
