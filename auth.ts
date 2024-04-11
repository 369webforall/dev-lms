import NextAuth from "next-auth";

import {PrismaAdapter} from "@auth/prisma-adapter";

import authConfig from "./auth.config";
import prisma from "./prisma/client";
import { getUserById } from "./data/user";
import { User, UserRole } from "@prisma/client";
export const {
  handlers:{
    GET,POST
  },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks:{
    async session({token, session}){

      if(token.sub && session.user){
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
        
      }
      if(session.user){
        session.user.name = token.name;
        session.user.email = token.email as string;
      }
      
      return session
    },

    async jwt({token}){
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;

      return token
    }
  },
  adapter:PrismaAdapter(prisma),
  session:{strategy:"jwt"},
 ...authConfig,
});
