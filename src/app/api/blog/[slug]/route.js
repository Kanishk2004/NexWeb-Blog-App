import { Post } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
	const { slug } = params;
	try {
		connectDb();
		const post = await Post.findOne({ slug });

		return NextResponse.json(post);
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch post!");
	}
};

export const DELETE = async (req, { params }) => {
	const { slug } = params;
	try {
		connectDb();
		await Post.findOneAndDelete({ slug });

		return NextResponse.json({ success: "Post deleted successfully!" });
	} catch (error) {
		console.log(error);
		throw new Error("Failed to fetch post!");
	}
};
