function Frinds({
	data,
	isLoading,
	isError,
	selectFriend,
	getChatHistory,
	setShowChatPage,
}) {
	return (
		<div className="pt-24">
			{isLoading && (
				<div className="flex justify-center items-center pt-12">
					<div className="lds-ring">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			)}
			{!isLoading &&
				!isError &&
				data.map((friend) => (
					<div
						className="flex items-center justify-start ml-2 pt-5 pb-5 pl-2 hover:bg-slate-800 rounded-lg cursor-pointer"
						onClick={() => {
							selectFriend(friend._id);
							getChatHistory(friend._id);
							if (window.innerWidth < 640) {
								setShowChatPage(true);
							}
						}}>
						<img
							src={friend.profilePicture}
							alt=""
							className="w-10  rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-[#ccd1c8]  font-thin text-sm">
									{friend.fullName}
								</h2>
								<p className="text-gray-400 font-thin text-xs">
									{friend.chats.length > 0 ? "" : "Start Messging"}
								</p>
							</div>

							{/* <p className="text-gray-300 font-thin text-xs">5:30 PM</p> */}
						</div>
					</div>
				))}
			{isError && (
				<div className="pt-12 text-slate-300">
					<p>Oops! Something went wrong. Try again.</p>
				</div>
			)}
		</div>
	);
}

export default Frinds;
