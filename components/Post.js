import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { forwardRef } from "react";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div ref={ref} className="bg-white p-[15px] mb-[10px] rounded-lg">
			{/* Header */}
			<div className="flex mb-[10px]">
				<Avatar src={photoUrl}>{name[0]}</Avatar>
				{/* Post Info */}
				<div className="ml-[10px]">
					<h2 className="text-lg text-gray-800 font-bold mb-[-6px]">{name}</h2>
					<p className="text-md text-gray-500">{description}</p>
				</div>
			</div>

			{/* Post message */}
			<div className="break-words">
				<p className="text-md">{message}</p>
			</div>

			{/* Post Buttons */}
			<div className="flex justify-evenly">
				<InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
				<InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray" />
				<InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
				<InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
			</div>
		</div>
	);
});

Post.displayName = "Post";
export default Post;
