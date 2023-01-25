import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDiVv1eJDoAaAU7VMG-wthoL-RWTDZPZLA",
  authDomain: "zan-store.firebaseapp.com",
  //   projectId: "zan-store",
  storageBucket: "zan-store.appspot.com",
  messagingSenderId: "96071270831",
  appId: "1:96071270831:web:3bb9c0185633cecf506f5a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { app, db, storage };
