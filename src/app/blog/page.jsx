import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCHING DATA USING API
const getData = async () => {
	const res = await fetch("http://localhost:3000/api/blog", {cache: "no-store"});
	if (!res.ok) {
		throw new Error("Something went wrong!");
	}
	return res.json();
};

export const metadata = {
	title: "NexWeb - Blog",
	description: "NexWeb studios blog page, all updates and stories related to the domain.",
};

const Blog = async () => {

	// FETCHING DATA USING API
	const posts = await getData();

	// const posts = await getPosts();

	return (
		<div className={styles.container}>
			{posts.map((post) => (
				<div className={styles.post} key={post._id}>
					<PostCard post={post} />
				</div>
			))}
		</div>
	);
};

export default Blog;
