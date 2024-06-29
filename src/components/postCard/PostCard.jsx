import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.imgContainer}>
					<Image src={post.img ? post.img : "/blankpost.jpg"} alt="posts" fill className={styles.img} />
				</div>
				<div className={styles.dateContainer}>
					<span className={styles.date}>{post.createdAt.toString().slice(0, 10)}</span>
				</div>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>{post.title}</h1>
				<p className={styles.desc}>{post.desc}</p>
				<Link href={`/blog/${post.slug}`} className={styles.link}>
					READ MORE
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
