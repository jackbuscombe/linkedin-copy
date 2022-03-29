function InputOption({ Icon, title, color }) {
	return (
		<div className="flex items-center mt-[15px] text-gray-500 p-[20px] cursor-pointer hover:bg-gray-50 hover:rounded-lg">
			<Icon style={{ color: color }} />
			<h4 className="ml-[5px] font-semibold">{title}</h4>
		</div>
	);
}
export default InputOption;
