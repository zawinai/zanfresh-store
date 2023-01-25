import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { initializeApp, getApps, getApp } from "firebase/app";

import { FirestoreAdapter } from "@next-auth/firebase-adapter";

const firebaseConfig = {
  apiKey: process.env.API,
  authDomain: process.env.ADM,
  projectId: process.env.PID,
  storageBucket: process.env.BUC,
  messagingSenderId: process.env.MSGID,
  appId: process.env.APP,
};

initializeApp(firebaseConfig);

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GG_ID as string,
      clientSecret: process.env.GG_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  adapter: FirestoreAdapter(firebaseConfig),
});
