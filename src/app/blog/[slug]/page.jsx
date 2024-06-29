import Image from "next/image";
import styles from "./post.module.css";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";
// import { getPost } from "@/lib/data";

const getPost = async (slug) => {
	const res = await fetch(`http://localhost:3000/api/blog/${slug}`, { next: { revalidate: 3600 } });
	if (!res.ok) {
		throw new Error("Something went wrong!");
	}
	return res.json();
};

export const generateMetadata = async ({ params }) => {
	const { slug } = params;
	const post = await getPost(slug);

	return {
		title: `NexWeb - ${post.title?post.title:"Post title"}`,
		description: post.desc,
	};
};

const PostPage = async ({ params }) => {
	const { slug } = params;

	const post = await getPost(slug);

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src={post.img ? post.img : "/blankpost.jpg"} alt="post" fill className={styles.img} />
			</div>

			<div className={styles.infoContainer}>
				<h1 className={styles.title}>{post.title}</h1>

				<Suspense fallback={<div>Loading...</div>}>
					<PostUser userId={post.userId} createdAt={post.createdAt.toString().slice(0, 10)} />
				</Suspense>

				<div className={styles.desc}>
					<p>{post.desc}</p>
				</div>
			</div>
		</div>
	);
};

export default PostPage;
