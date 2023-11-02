import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_PUBLIC_KEY as string,
      clientSecret: process.env.GOOGLE_SECRET_KEY as string,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
};

// http://localhost:3000/api/auth/providers
// Why get req on this working
