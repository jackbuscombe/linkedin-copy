import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
	const newsArticle = (heading, subtitle) => (
		<div className="flex p-[10px] cursor-pointer hover:bg-gray-50">
			<div className="text-[#0177b7] mr-[5px] text-sm">
				<FiberManualRecordIcon fontSize="small" />
			</div>

			<div className="flex-1">
				<h4 className="text-lg font-bold">{heading}</h4>
				<p className="font-md text-gray-500">{subtitle}</p>
			</div>
		</div>
	);
	return (
		<div className="sticky top-[80px] w-1/4 bg-white rounded-lg border border-gray-300 h-fit pb-[10px]">
			<div className="flex items-center justify-between p-[10px]">
				<h2 className="text-lg font-semibold">LinkedIn News</h2>
				<InfoIcon />
			</div>

			{newsArticle("Breaking: LinkedIn is outdated", "Top news - 9,050 readers")}
			{newsArticle("Bevan is asleep", "Top news - 3,000 readers")}
			{newsArticle("Jackie is famous", "Top news - 9,000 readers")}
			{newsArticle("JackB is back", "Top news - 2,000 readers")}
			{newsArticle("Graheme Speak lets loose", "Top news - 1,000 readers")}
			{newsArticle("Gas prices", "Top news - 500 readers")}
			{newsArticle("Svelte will take over React in users", "Top news - 300 readers")}

			<div></div>
			<div></div>
		</div>
	);
}
export default Widgets;
