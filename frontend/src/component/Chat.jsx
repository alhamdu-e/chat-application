import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";

function Chat({
	chatHistory,
	selectedFriend,
	setMessage,
	message,
	insertChat,
	handleFile,
}) {
	const user = JSON.parse(localStorage.getItem("user"));
	const messagesEndRef = useRef(null);
	const selectFileAndImage = useRef(null);
	const [showEmogiPicker, setShowEmogiPicker] = useState(false);
	const openFile = () => {
		selectFileAndImage?.current?.click();
	};

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	const onEmojiClick = (emojiObject) => {
		setMessage((prevInput) => prevInput + emojiObject.emoji);
		setShowEmogiPicker(false);
	};

	useEffect(() => {
		scrollToBottom();
	}, [chatHistory, message, insertChat]);

	console.log(chatHistory);
	return (
		<div>
			{selectedFriend?.length > 0 && (
				<div className="pl-2 pr-2  grid gap-8  grid-cols-1 pt-32 lg:gap-5 pb-20">
					{chatHistory.map((msg, index) => (
						<>
							<div
								key={index}
								className={`flex items-start space-x-2 ${
									msg.sender === user._id ? "justify-end" : ""
								}`}>
								{msg.sender !== user._id && (
									<img
										src={
											selectedFriend[0]?.profilePicture
												? selectedFriend[0]?.profilePicture
												: "./images/avater.svg"
										}
										alt="User Avatar"
										className="w-10 h-10 rounded-full"
									/>
								)}

								<div
									className={` text-orange-100 font-thin p-3 rounded-lg shadow max-w-xs  ${
										msg.sender === user._id ? "bg-[#071952]" : "bg-[#134B70]"
									}`}>
									{msg.isImage ? (
										<>
											<img
												src={msg.message}
												alt="My Avatar"
												className="w-full"
											/>

											<p className="w-full break-words">{msg.caption}</p>
										</>
									) : (
										<p className="w-full break-words">{msg.message}</p>
									)}
									<span className="text-xs text-blue-200">10:01 AM</span>
								</div>
								{msg.sender === user._id && (
									<img
										src={
											user.profilePicture
												? user.profilePicture
												: "./images/avater.svg"
										}
										alt="My Avatar"
										className="w-10 h-10 rounded-full"
									/>
								)}
							</div>
						</>
					))}
					<div ref={messagesEndRef} />
				</div>
			)}
			{showEmogiPicker && (
				<div className="fixed bottom-16 right-10  ">
					<EmojiPicker
						theme="dark"
						height={300}
						onEmojiClick={onEmojiClick}
						style={{ backgroundColor: "#0F172A" }}
						previewConfig={{
							showPreview: false,
						}}
					/>
				</div>
			)}

			<div className="bg-slate-800 fixed h-12 bottom-0 w-full pl-4 pr-5 flex right-0  sm:w-[50vw] lg:w-[75vw] ">
				<button className="text-2xl  text-orange-100 " onClick={openFile}>
					<MdAttachFile />
				</button>
				<input
					autoFocus
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Write Messege"
					className="bg-slate-800  border-transparent outline-none px-1 w-[90%] py-2 text-slate-100 font-thin"
				/>

				<button
					className="text-2xl  text-orange-100 mr-3"
					onClick={() => setShowEmogiPicker(!showEmogiPicker)}>
					<MdOutlineEmojiEmotions />
				</button>
				<input
					type="file"
					className=" hidden"
					ref={selectFileAndImage}
					onChange={handleFile}
				/>
				<button
					className=" text-2xl text-orange-100  disabled:text-gray-500"
					onClick={() => {
						insertChat();
						scrollToBottom();
					}}
					// disabled={message?.trim().length === 0}
				>
					<IoSend />
				</button>
			</div>
		</div>
	);
}

export default Chat;
