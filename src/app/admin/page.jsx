import { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPost from "@/components/adminPosts/adminPost";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { auth } from "@/lib/auth";

const Admin = async () => {
	const session = await auth();
	// console.log(session.user.id);

	return (
		<div className={styles.container}>
			<div className={styles.row}>
				<div className={styles.col}>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminPost />
					</Suspense>
				</div>
				<div className={styles.col}>
					<AdminPostForm userId={session.user.id} />
				</div>
			</div>

			<div className={styles.row}>
				<div className={styles.col}>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminUsers />
					</Suspense>
				</div>
				<div className={styles.col}>
					<AdminUserForm />
				</div>
			</div>
		</div>
	);
};

export default Admin;
