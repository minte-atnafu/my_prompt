import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import User from "../../../../models/user";

import { connectToDB } from "../../../../utils/databse";
import Profile from "../../../../componets/Profile";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })
        session.user.id = sessionUser._id.toString();
        return session;
    },
    
    async signIn({ signIn }) {
        try {
            await connectToDB();

            // check if a user already exists
            const userExists = await User.findone({
                email: Profile.email
            })

            //if not, create a new user
            if (!userExists) {
                await User.create({
                    email: Profile.email,
                    username: Profile.name.replace(" ", "").toLowerCase(),
                    image: Profile.picture
                })
            }

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})
export { handler as GET, handler as POST };
