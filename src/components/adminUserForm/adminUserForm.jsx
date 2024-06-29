"use client";
import { newUser } from "@/lib/actions";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
	const [state, formAction] = useFormState(newUser, undefined);

	return (
		<form action={formAction} className={styles.container}>
			<h1>Add New User</h1>
			<input type="text" placeholder="Username" name="username" />
			<input type="email" placeholder="Email" name="email" />
			<input type="password" placeholder="Password" name="password" />
			<input type="text" placeholder="Avatar Url" name="img" />
      <select name="isAdmin">
        <option value="false">Role?</option>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
			<button>Add User</button>
			{state && state.error}
		</form>
	);
};

export default AdminUserForm;
