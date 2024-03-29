import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';

type baseUrl = string | undefined;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export const useFirebase = (baseUrl: baseUrl) => {
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const dbRef = ref(database, baseUrl || '/');

  return { database, dbRef };
};
