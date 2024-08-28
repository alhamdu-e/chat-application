import { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
import { format } from "date-fns";
import { MdDelete } from "react-icons/md";
import { FormateDate } from "./dateFormater";
import "reactjs-popup/dist/index.css";

function Chat({
	chatHistory,
	selectedFriend,
	setMessage,
	message,
	insertChat,
	handleFile,
	showModal,
	setShowModal,
	setChatId,
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

	return (
		<div>
			{selectedFriend?.length > 0 && (
				<div className="pl-2 pr-2  grid gap-8  grid-cols-1 pt-32 lg:gap-5 pb-20">
					{chatHistory.map((msg, index) => (
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
								className={` text-orange-100 font-thin p-3 pt-2 rounded-lg shadow max-w-xs  hover: group ${
									msg.sender === user._id ? "bg-[#071952]" : "bg-[#134B70]"
								}`}>
								<div className="flex items-center justify-between mb-2 ">
									<span className="font-thin text-slate-300 text-[10px]">
										{FormateDate(msg.createdAt)}
									</span>

									<button
										onClick={() => {
											setChatId(msg._id);

											setShowModal(!showModal);
										}}
										className="bg-stone-50 text px-1 text-red-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-4">
										<MdDelete />
									</button>
								</div>

								{msg.isImage ? (
									<>
										<img
											src={msg.message}
											alt="My Avatar"
											className="w-[90%] sm:w-full"
										/>

										<p className="w-full break-words">{msg.caption}</p>
									</>
								) : (
									<p className="w-full break-words">{msg.message}</p>
								)}
								<span className="text-xs text-blue-200">
									{format(new Date(msg.createdAt), "h:mm a")}
								</span>
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

			{selectedFriend?.length > 0 && (
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
			)}
		</div>
	);
}

export default Chat;
