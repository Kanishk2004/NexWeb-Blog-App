import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";

const AdminUsers = async () => {
	const users = await getUsers();
	return (
		<div className={styles.container}>
			<h1>Users</h1>
			{users.map((user) => (
				<div className={styles.user} key={user._id}>
					<div className={styles.detail}>
						<Image src={user.img || "/noavatar.png"} alt="user avatar" width={50} height={50} />
						<span className={styles.username}>{user.username}</span>
					</div>
					<form action={deleteUser}>
						<input type="hidden" name="id" value={user.id} />
						<button className={styles.userBtn}>Delete</button>
					</form>
				</div>
			))}
		</div>
	);
};

export default AdminUsers;
