import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";

const LoginPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<form action={handleGithubLogin}>
					<button className={styles.githubBtn}>Login with Github</button>
				</form>
				<p>or</p>
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
