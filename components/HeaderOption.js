import { Avatar } from "@material-ui/core";
import { useStore } from "../lib/store";

function HeaderOption({ Icon, title, active, avatar, onClick }) {
	const user = useStore((state) => state.user);

	return (
		<div onClick={onClick} className="header-option group">
			{Icon && Icon}
			{avatar && (
				<Avatar className="h-6 w-6" src={user?.photoUrl}>
					{user?.name[0]}
				</Avatar>
			)}
			<div className="group-hover:font-bold whitespace-nowrap">{title}</div>
		</div>
	);
}
export default HeaderOption;
