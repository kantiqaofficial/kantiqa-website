import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {

providers:[

CredentialsProvider({

name:"Credentials",

credentials:{
email:{label:"Email",type:"text"},
password:{label:"Password",type:"password"}
},

async authorize(credentials){

await connectDB()

const user = await User.findOne({
email:credentials.email
})

if(!user){
throw new Error("User not found")
}

const isValid = await bcrypt.compare(
credentials.password,
user.password
)

if(!isValid){
throw new Error("Invalid password")
}

return {
id:user._id.toString(),
name:user.name,
email:user.email,
role:user.role
}

}

}),

GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET
})

],

session:{
strategy:"jwt"
},

callbacks:{

async signIn({ user }) {

await connectDB()

const existingUser = await User.findOne({
email: user.email
})

if(!existingUser){

await User.create({
name: user.name,
email: user.email,
role: "user"
})

}

return true
},

async jwt({token,user}){

if(user){
token.role = user.role
}

return token

},

async session({session,token}){

if(session.user){
session.user.role = token.role
}

return session

}

}

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }