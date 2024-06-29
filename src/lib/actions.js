"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const newPost = async (prevState, formData) => {
	const { title, desc, userId, slug, img } = Object.fromEntries(formData);
	try {
		connectDb();

		const newPost = new Post({
			title,
			desc,
			userId,
			slug,
			img,
		});

		await newPost.save();
		console.log("New post saved successfully!");
		revalidatePath("/blog");
		revalidatePath("/admin");
	} catch (error) {
		console.log(error);
		return {error: "Failed to add new post!"}
	}
};

export const deletePost = async (formData) => {
	const { id } = Object.fromEntries(formData);

	try {
		connectDb();

		await Post.findByIdAndDelete(id);

		console.log("Post deleted successfully!");
		revalidatePath("/blog");
		revalidatePath("/admin");
	} catch (error) {
		console.log(error);
		throw new Error("Failed to delete post!");
	}
};

export const newUser = async (prevState, formData) => {
	const { username, email, password, img, isAdmin } = Object.fromEntries(formData);
	try {
		connectDb();

		const newUser = new User({
			username,
			email,
			password,
			img,
			isAdmin
		});

		await newUser.save();
		console.log("New user created successfully!");
		revalidatePath("/admin");
	} catch (error) {
		console.log(error);
		return {error: "Failed to crate new user!"}
	}
};

export const deleteUser = async (userId) => {
	const { id } = Object.fromEntries(userId);

	try {
		connectDb();

		await Post.deleteMany({ userId: id });
		await User.findByIdAndDelete(id);

		console.log("User deleted successfully!");
		revalidatePath("/admin");
	} catch (error) {
		console.log(error);
		throw new Error("Failed to delete user!");
	}
};

export const handleGithubLogin = async (e) => {
	"use server";
	await signIn("github");
};

export const handleLogout = async (e) => {
	"use server";
	await signOut();
};

export const register = async (prevState, formData) => {
	const { username, email, password, confirmPassword, img } = Object.fromEntries(formData);

	if (password !== confirmPassword) {
		return { error: "Password do not match!" };
	}

	try {
		// console.log(username, email, password, confirmPassword);
		connectDb();

		const user = await User.findOne({ username });
		if (user) {
			return { error: "User already exists" };
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPass,
			img,
		});

		await newUser.save();
		console.log("New user created!");
		return { success: true };
	} catch (error) {
		console.log(error);
		throw new Error("Something went wrong! failed to register new user.");
	}
};

// TODO: Credential login not working as of now
export const handleLogin = async (prevState, formData) => {
	const { email, password } = Object.fromEntries(formData);
	try {
		await signIn("credentials", { email, password });
	} catch (err) {
		console.log(err);

		if (err.message.includes("CredentialsSignin")) {
			return { error: "Invalid email or password." };
		}

		return err;
	}
};
