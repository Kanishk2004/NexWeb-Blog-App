import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";

// TODO: Credentials login not working
const login = async (credentials) => {
	try {
		connectDb();
		const user = await User.findOne({ email: credentials.email });
		if (!user) {
			throw new Error("Wrong credentials!");
		}

		// console.log("Email found in DB!");

		const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

		if (!isPasswordCorrect) {
			throw new Error("Wrong credentials!");
		}
		// console.log("Password matched!");

		return user;
	} catch (error) {
		console.log("Error in login function:", error);
		throw new Error("Failed to login!");
	}
};

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	providers: [
		GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			// console.log(user, account, profile);

			if (account.provider === "github") {
				connectDb();
				try {
					const user = await User.findOne({ email: profile.email });
					if (!user) {
						const newUser = new User({
							username: profile.login,
							email: profile.email,
							img: profile.avatar_url,
							password: profile.email,
						});

						await newUser.save();
					}
				} catch (error) {
					console.error("Error in authorize callback:", error);
					return false;
				}
			}
			return true;
		},
		...authConfig.callbacks,
	},
});
