import { getPosts } from "@/lib/data";
import styles from "./adminPost.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

const AdminPost = async () => {
	const posts = await getPosts();

	return (
		<div className={styles.container}>
			<h1>Posts</h1>
			{posts.map((post) => (
				<div className={styles.post} key={post._id}>
					<div className={styles.detail}>
						<Image src={post.img || "/noavatar.png"} alt="post img" width={50} height={50} />
						<span className={styles.postTitle}>{post.title}</span>
					</div>
					<form action={deletePost}>
						<input type="hidden" name="id" value={post.id} />
						<button className={styles.postBtn}>Delete</button>
					</form>
				</div>
			))}
		</div>
	);
};

export default AdminPost;
