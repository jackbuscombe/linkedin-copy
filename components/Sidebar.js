import { Avatar } from "@material-ui/core";
import { useStore } from "../lib/store";

function Sidebar() {
	const user = useStore((state) => state.user);

	const recentItem = (topic) => (
		<div className="flex text-md text-gray-500 cursor-pointer font-semibold p-[5px] mb-[5px] hover:bg-gray-100 hover:font-bold hover:text-gray-800">
			<span className="mr-[10px] ml-[5px]">#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className="sticky top-[80px] w-1/4 rounded-sm text-center h-fit">
			{/* User Section */}
			<div className="flex flex-col items-center border border-gray-300 rounded-t-xl bg-white pb-[10px]">
				<img className="mb-[-20px] h-[60px] w-full rounded-t-xl" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
				<div className="mb-[10px]">
					<Avatar src={user.photoUrl}>{user.name[0]}</Avatar>
				</div>
				<h2 className="text-xl font-bold">{user.name}</h2>
				<h4 className="text-gray-700 text-lg">{user.email}</h4>
			</div>

			{/* Stats */}
			<div className="p-[10px] mb-[10px] bg-white border border-gray-400 rounded-b-lg">
				<div className="mt-[10px] flex justify-between">
					<p className="text-gray-600 text-lg font-semibold">Who viewed you</p>
					<p className="font-bold  text-[#0a66c2]">2,539</p>
				</div>
				<div className="mt-[10px] flex justify-between">
					<p className="text-gray-600 text-lg font-semibold">Views on posts</p>
					<p className="font-bold  text-[#0a66c2]">2,539</p>
				</div>
			</div>

			{/* Button */}
			<div className="text-left p-[10px] border border-gray-300 bg-white rounded-lg mt-[10px]">
				<p className="text-xl pb-[10px]">Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("engineering")}
				{recentItem("design")}
				{recentItem("developer")}
			</div>
		</div>
	);
}
export default Sidebar;
