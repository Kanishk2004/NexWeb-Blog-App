import Image from "next/image";
import styles from "./page.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>Creative Thoughts Agency.</h1>
				<p className={styles.desc}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis maxime in debitis nobis ea laboriosam.
				</p>
				<div className={styles.btns}>
					<button className={styles.btn}>Learn More</button>
					<button className={styles.btn}>Contact</button>
				</div>
				<div className={styles.brands}>
					<Image src={"/brands.png"} alt="brands" fill className={styles.brandImg} />
				</div>
			</div>
			<div className={styles.imgContainer}>
				<Image src={"/hero.gif"} alt="hero image" fill className={styles.heroImg} />
			</div>
		</div>
	);
};

export default Home;

// TODO - Major issues to fix
// 1. When admin creats the user password do not gets encrypted.
// 2. When you login using credentials the login page do not redirect after login.
// 3. After getting logged in using github the user details do not get saved in database.
// 4. Profile button visible on navbar but do not exists.
// 5. Completed the project but i do not understand the concepts of (Next-Auth) authjs library used and the concepts used in auth.config.js file.
