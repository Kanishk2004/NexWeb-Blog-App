"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

const links = [
	{
		title: "Homepage",
		path: "/",
	},
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Contact",
		path: "/contact",
	},
	{
		title: "Blog",
		path: "/blog",
	},
];

const Links = ({ session }) => {
	const [open, setOpen] = useState(false);

	// Temporary

	const isAdmin = true;

	return (
		<div className={styles.container}>
			<div className={styles.links}>
				{links.map((link) => (
					<NavLink item={link} key={link.path} />
				))}
				{session?.user ? (
					<>
						{session.user?.isAdmin ? (
							<NavLink item={{ title: "Admin", path: "/admin" }} />
						) : (
							<NavLink item={{ title: "Profile", path: "/profile" }} />
						)}
						<form action={handleLogout}>
							<button className={styles.logout}>Logout</button>
						</form>
					</>
				) : (
					<NavLink item={{ title: "Login", path: "/login" }} />
				)}
			</div>

			<Image
				className={styles.menuBtn}
				src={"/menu.png"}
				alt="menu"
				width={25}
				height={25}
				onClick={() => setOpen((prev) => !prev)}
			/>

			{open && (
				<div className={styles.mobileLinks}>
					{links.map((link) => (
						<NavLink item={link} key={link.path} />
					))}
				</div>
			)}
		</div>
	);
};

export default Links;

// lama dev 50:00
