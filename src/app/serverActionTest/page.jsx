import { deletePost, newPost } from "@/lib/actions";
import React from "react";
export const metadata = {
	title: "NexWeb - server action test",
	description: "testing server actions",
};
const ServerActionTest = () => {
	return (
		<div>
			<form action={newPost}>
				<input type="text" placeholder="title" name="title" />
				<input type="text" placeholder="desc" name="desc" />
				<input type="text" placeholder="userId" name="userId" />
				<input type="text" placeholder="slug" name="slug" />
                <button>Create</button>
			</form>
			<form action={deletePost}>
				<input type="text" placeholder="postId" name="id" />
                <button>Delete</button>
			</form>
		</div>
	);
};

export default ServerActionTest;
