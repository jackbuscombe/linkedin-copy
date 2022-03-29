import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import HeaderOption from "./HeaderOption";
import { getAuth, signOut } from "firebase/auth";

function Header() {
	const auth = getAuth();

	return (
		<div className="sticky flex flex-1 justify-evenly py-5 border-b-2 w-full top-0 z-50 bg-white">
			{/* Header Left */}
			<div className="flex items-center">
				<img src="https://pbs.twimg.com/profile_images/1468001580184047616/PxDlAA8N_400x400.jpg" alt="" className="object-contain h-[40px] rounded-md mr-3" />

				<div className="p-5 flex items-center h-3 text-gray-500 bg-[#eef3f8] rounded-md">
					<SearchIcon />
					<input type="text" placeholder="Search" className="outline-none border-none bg-transparent" />
				</div>
			</div>

			{/* Header Right */}
			<div className="flex space-x-8">
				<HeaderOption Icon={<HomeIcon />} title="Home" />
				<HeaderOption Icon={<GroupIcon />} title="My Network" />
				<HeaderOption Icon={<BusinessCenterIcon />} title="Jobs" />
				<HeaderOption Icon={<ModeCommentIcon />} title="Messaging" />
				<HeaderOption Icon={<NotificationsIcon />} title="Notifications" />
				<HeaderOption avatar onClick={() => signOut(auth)} title="Jack" />
				<HeaderOption Icon={<MoreHorizIcon />} title="Work" />
			</div>
		</div>
	);
}
export default Header;
