import { IoSend } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import Chat from "./Chat";
function ChatUiSm({
	setShowChatPage,
	showChatPageSm,
	selectedFriend,
	chatHistory,
}) {
	return (
		<div className="bg-slate-950 lg:col-span-1 sm:col-span-2  h-screen overflow-y-scroll sm:hidden">
			<div className="w-full sm:w-[48.9vw] lg:w-[24.60vw] border-b border-gray-700 border-solid flex items-center  pt-7 pb-5 bg-slate-900 fixed pl-2">
				<IoArrowBackOutline
					className="text-orange-100 text-2xl mr-4 cursor-pointer border-b-transparent border-b-4 rounded-sm border-solid hover:border-orange-400 transition-colors duration-300 ease-in-out"
					onClick={() => setShowChatPage(!showChatPageSm)}
				/>

				{selectedFriend?.length > 0 && (
					<>
						<img
							src={
								selectedFriend[0]?.profilePicture
									? selectedFriend[0]?.profilePicture
									: "./images/avater.svg"
							}
							alt=""
							className="w-10 rounded-[100px] "
						/>

						<div>
							<p className="text-slate-300 ml-3 text-sm -mb-4 font-normal">
								{selectedFriend[0]?.fullName}
							</p>
							<p className="mt-[13px] text-slate-300 ml-3 font-thin text-xs">
								{selectedFriend?.length > 0
									? selectedFriend[0]?.isOnline
										? "online"
										: "offline"
									: ""}
							</p>
						</div>
					</>
				)}
			</div>
			<Chat chatHistory={chatHistory} selectedFriend={selectedFriend} />
			<div className="bg-slate-800 fixed h-12 bottom-0 w pl-4 pr-5 flex right-0 left-0 ">
				<button className="text-2xl  text-orange-100">
					<MdAttachFile />
				</button>

				<input
					autoFocus
					type="text"
					placeholder="Write Messege"
					className="bg-slate-800  border-transparent outline-none px-1 w-[90%] py-2 text-slate-100 font-thin"
				/>

				<button className=" text-2xl text-orange-100">
					<IoSend />
				</button>
			</div>
		</div>
	);
}

export default ChatUiSm;
