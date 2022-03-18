import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDzodmwNbJqWj60e5Sxvnqx8FfbeHQ1J9E',
  authDomain: 'musica-d82de.firebaseapp.com',
  databaseURL: 'https://musica-d82de-default-rtdb.firebaseio.com',
  projectId: 'musica-d82de',
  storageBucket: 'musica-d82de.appspot.com',
  messagingSenderId: '288728777746',
  appId: '1:288728777746:web:d51872929cf621db5204cb',
  measurementId: 'G-YT7K6R4G67',
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
