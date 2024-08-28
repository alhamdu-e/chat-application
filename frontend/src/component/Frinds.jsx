import { FormateDate } from "./dateFormater";
function Frinds({
	data,
	isLoading,
	isError,
	selectFriend,
	getChatHistory,
	setShowChatPage,
	lastMessage,
	setIsClicked,
}) {
	function TruncatText(message) {
		if (message?.length <= 20) {
			return message;
		}
		let truncateMessage = message?.substring(0, 30);
		const lastindexof = truncateMessage?.lastIndexOf(" ");
		if (lastindexof > 0) {
			truncateMessage = truncateMessage?.substring(0, lastindexof);
		}
		return truncateMessage + "...";
	}

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
				data.map((friend) => {
					// Find the last message for the current friend
					const messageData = lastMessage.find(
						(mes) => mes.friendId === friend._id
					);

					return (
						<div
							key={friend._id}
							className="flex items-center justify-start ml-2 pt-5 pb-5 pl-2 hover:bg-slate-800 rounded-lg cursor-pointer"
							onClick={() => {
								selectFriend(friend._id);
								getChatHistory(friend._id);
								if (window.innerWidth < 640) {
									setShowChatPage(true);
								}
								setIsClicked(true);
							}}>
							<img
								src={
									friend.profilePicture
										? friend.profilePicture
										: "./images/avater.svg"
								}
								alt=""
								className="w-10 rounded-[100px]"
							/>
							<div className="ml-2 flex justify-between w-full mr-4">
								<div>
									<h2 className="text-[#ccd1c8] font-thin text-sm">
										{friend.fullName}
									</h2>
									{messageData?.isImage ? (
										<>
											<img
												src={messageData.lastMessage}
												className="w-10 inline mt-1"
												alt="ptofile "
											/>{" "}
											<span className="text-gray-400 font-thin text-xs">
												Photo
											</span>
										</>
									) : (
										<p className="text-gray-400 font-thin text-xs">
											{messageData?.lastMessage
												? TruncatText(messageData?.lastMessage)
												: "no message yet"}
										</p>
									)}
								</div>

								{messageData?.lastMessageTime && (
									<p className="text-gray-300 font-thin text-xs">
										{FormateDate(messageData.lastMessageTime)}
									</p>
								)}
							</div>
						</div>
					);
				})}
			{isError && (
				<div className="pt-12 text-slate-300">
					<p>Oops! Something went wrong. Try again.</p>
				</div>
			)}
		</div>
	);
}

export default Frinds;
