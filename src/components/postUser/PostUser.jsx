import Image from "next/image";
import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";

// const getPost = async (userId) => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'});
// 	if (!res.ok) {
// 		throw new Error("Something went wrong!");
// 	}
// 	return res.json();
// };

const PostUser = async ({ userId, createdAt }) => {
	// const user = await getPost(userId);
	const user = await getUser(userId);

	return (
		<div className={styles.authorInfo}>
			<div className={styles.avatarImgContainer}>
				<Image src={user.img?user.img:"/noavatar.png"} alt="avatar" fill className={styles.avatarImg} />
			</div>
			<div className={styles.name}>
				<h3>Author</h3>
				<h2>{user.username}</h2>
			</div>
			<div className={styles.published}>
				<h3>Published</h3>
				<h2>{createdAt}</h2>
			</div>
		</div>
	);
};

export default PostUser;
