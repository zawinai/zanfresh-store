import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { FirestoreAdapter } from "@next-auth/firebase-adapter";

const firebaseConfig = {
  apiKey: "AIzaSyDiVv1eJDoAaAU7VMG-wthoL-RWTDZPZLA",
  authDomain: process.env.ADM,
  projectId: process.env.PID,
  storageBucket: process.env.BUC,
  messagingSenderId: process.env.MSGID,
  appId: process.env.APP,
};

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
  session: {
    strategy: "jwt",
    maxAge: 90 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token;
      }
      return session;
    },
  },
});
