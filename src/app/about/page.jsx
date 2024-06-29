import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
	title: "NexWeb - About",
	description: "all you need to know About NexWeb Studios.",
};

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h2 className={styles.subtitle}>About Agency</h2>
				<h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam amet blanditiis est, libero eos debitis
					qui vitae recusandae reiciendis modi atque ullam perferendis similique! Molestias asperiores facere dicta
					eaque!
				</p>
				<div className={styles.boxes}>
					<div className={styles.box}>
						<h1>10+</h1>
						<p>Years of experience</p>
					</div>
					<div className={styles.box}>
						<h1>234 K+</h1>
						<p>People reached</p>
					</div>
					<div className={styles.box}>
						<h1>5 K+</h1>
						<p>Services and plugins</p>
					</div>
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src={"/about.png"} alt="illustration" fill className={styles.img} />
			</div>
		</div>
	);
};

export default About;
