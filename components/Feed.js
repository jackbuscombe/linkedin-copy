import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import EventIcon from "@material-ui/icons/Event";
import BookIcon from "@material-ui/icons/Book";
import Post from "./Post";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, onSnapshot, doc, setDoc, addDoc, serverTimestamp, orderBy } from "firebase/firestore";
import { useStore } from "../lib/store";
import FlipMove from "react-flip-move";

function Feed() {
	const user = useStore((state) => state.user);

	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
		onSnapshot(q, (snapshot) =>
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				}))
			)
		);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		const docRef = addDoc(collection(db, "posts"), {
			name: user.name,
			description: user.email,
			message: input,
			photoUrl: user.photoUrl || "",
			timestamp: serverTimestamp(),
		});

		setInput("");
	};

	return (
		<div className="w-1/2 my-[20px]">
			{/* Write post container */}
			<div className="bg-white p-[10px] pb-[20px] rounded-lg mb-[20px]">
				{/* Input */}
				<div className="border border-gray-300 rounded-2xl flex p-[10px] text-gray-500 pl-[15px] hover:bg-gray-50">
					<CreateIcon />
					<form className="flex w-full">
						<input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start a post" className="border-none flex-1 ml-[10px] outline-none font-semibold bg-transparent" />
						<button onClick={sendPost} type="submit" hidden>
							Send
						</button>
					</form>
				</div>
				{/* Options */}
				<div className="flex justify-evenly">
					<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={VideoLibraryIcon} title="Video" color="#E7A33E" />
					<InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
					<InputOption Icon={BookIcon} title="Write article" color="#7FC15E" />
				</div>
			</div>

			{/* Posts */}
			<FlipMove>
				{posts.map(({ id, data: { name, description, message, photoUrl, timestamp } }) => (
					<Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
				))}
			</FlipMove>
		</div>
	);
}
export default Feed;
