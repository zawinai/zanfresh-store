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
