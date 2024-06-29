"use client";
import styles from './loginForm.module.css'
import { handleLogin } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
	const [state, formAction] = useFormState(handleLogin, undefined);

	const router = useRouter();

	// useEffect(() => {
	// 	state?.success && router.push("/login");
	// }, [state?.success, router]);

	return (
		<form action={formAction} className={styles.form}>
			<input type="text" placeholder="Email" name="email" />
			<input type="password" placeholder="Password" name="password" />
			<button>Login</button>
			{state?.error}
			<Link href={"/register"}>
				{"Don't have an account?"} <b>Register</b>
			</Link>
		</form>
	);
};

export default LoginForm;

