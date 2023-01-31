import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/* After spending 4 hours straight on the couch I think of myself
Why my life is so misarable? I always see problems and everything is hard in my life.
it's 1 am and almost feburary in an another whole new year since 2021 my I still can not manage myself to find a happiness.. In fact
I don't even remember the last I got a chance to be happy
and finally I removed the env variables and everything worked again..?!
Well.. maybe I just over thought and maybe my life wasn't that bad at all..
a typical developer frustration moment..
*/

// This has an error
const firebaseConfig = {
  apiKey: "AIzaSyDiVv1eJDoAaAU7VMG-wthoL-RWTDZPZLA",
  authDomain: "zan-store.firebaseapp.com",
  projectId: "zan-store",
  storageBucket: "zan-store.appspot.com",
  messagingSenderId: "96071270831",
  appId: "1:96071270831:web:3bb9c0185633cecf506f5a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { app, db, storage };
