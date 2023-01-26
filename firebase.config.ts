import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API,
  authDomain: process.env.ADM,
  projectId: process.env.PID,
  storageBucket: process.env.BUC,
  messagingSenderId: process.env.MSGID,
  appId: process.env.APP,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { app, db, storage };
