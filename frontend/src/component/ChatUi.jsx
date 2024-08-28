import { useEffect } from "react";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";
import Frinds from "./Frinds";
import AddUser from "./AddUser";
import ChatUiSm from "./ChatUiSm";
import axios from "axios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Chat from "./Chat";
import EmojiPicker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { toast } from "react-toastify";

function ChatUi() {
	const [showAddUser, setShowAddUser] = useState(false);
	const [showChatPageSm, setShowChatPage] = useState(false);
	const [selectedFriend, SetSelectdFriedn] = useState([]);
	const [reciverId, setReciverId] = useState("");
	const [message, setMessage] = useState("");
	const [chatHistory, SetChatHistory] = useState([]);
	const [lastMessage, setLastMessage] = useState([]);
	const [files, setFiles] = useState({});
	const [imagePreview, setImagePreview] = useState(null);
	const [caption, setCaption] = useState("");
	const [isClicked, setIsClicked] = useState(false);
	const [iSchecked, setIsChecked] = useState(false);
	const [picker, setPicker] = useState(false);
	const queryClient = useQueryClient();
	const user = JSON.parse(localStorage.getItem("user"));
	const [onLineUser, setOnlineUser] = useState([]);
	const [isOnline, setIsOnline] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [chatId, setChatId] = useState("");

	const handleFile = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			setFiles(file);
			reader.onloadend = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const onEmojiClick = (emojiObject) => {
		setCaption((prevInput) => prevInput + emojiObject.emoji);
		setPicker(false);
	};
	useEffect(() => {
		async function retriveLastMessage() {
			try {
				const response = await axios.get(
					"http://127.0.0.1:5000/chat/lastmessage",
					{
						params: {
							userId: user._id,
						},
					}
				);
				setLastMessage(response.data);
			} catch (error) {}
		}
		retriveLastMessage();
	}, [user._id, chatHistory]);

	useEffect(() => {
		const socket = io("http://127.0.0.1:5000");
		socket.on("connect", () => {
			socket.emit("joinRoom", user._id);
		});
		socket.on("userOnline", ({ userId }) => {
			if (!onLineUser.includes(userId)) {
				setOnlineUser((prv) => [...prv, userId]);
			}
		});
		socket.on("userOffline", ({ userId }) => {
			setOnlineUser((prv) => prv.filter((userid) => userid !== userId));
		});
		socket.on("newChat", (data) => {
			console.log(data);
			SetChatHistory((prev) => [...prev, data]);
		});
		socket.on("disconnect", () => {
			console.log("Disconnected from server");
		});
		return () => {
			socket.disconnect();
		};
	}, [user._id, onLineUser]);

	const getChatHistory = async (friendid) => {
		try {
			const response = await axios.get(
				"http://127.0.0.1:5000/chat/chathistory",
				{
					params: {
						userId: user._id,
						freindId: friendid,
					},
				}
			);
			SetChatHistory(response.data);
		} catch (error) {
			throw error;
		}
	};
	const deleteChat = async () => {
		try {
			await axios.delete(`http://127.0.0.1:5000/chat/deletechat/${chatId}`);
			toast.success("Successfully deleted", {
				autoClose: 1000,
				position: "top-center",
			});
			SetChatHistory((prv) => prv.filter((chat) => chat._id !== chatId));
		} catch (error) {
			toast.error("Oops! Something Went wrong", {
				autoClose: 1000,
				position: "top-center",
			});
		}
	};
	const insertChat = async () => {
		if (message) {
			setFiles({});
		}
		try {
			const foramtData = new FormData();
			if (message.length > 0) {
				foramtData.append("message", message);
			} else {
				foramtData.append("files", files);
				foramtData.append("caption", caption);
			}

			foramtData.append("receiverId", reciverId);
			foramtData.append("senderId", user._id);
			await axios.post("http://127.0.0.1:5000/chat/newchat", foramtData);
			setFiles("");
			setMessage("");
			setImagePreview("");
		} catch (error) {
			throw error;
		}
	};
	useEffect(() => {
		queryClient.invalidateQueries({ queryKey: ["friends"] });
	}, [chatHistory, queryClient]);
	// function to Add and Remove Friend
	const addFriendAndRemoveFriend = async (userid, friendid) => {
		try {
			const data = await axios.post(`addorremovefriend/${userid}/${friendid}`);
			return data;
		} catch (error) {
			throw error;
		}
	};
	// function to get user friend
	const getFrinds = async ({ queryKey }) => {
		const [, userid] = queryKey;
		try {
			const { data } = await axios.get(`userfriend/${userid}`);
			return data;
		} catch (error) {
			throw error;
		}
	};
	// using React query to fetch
	const { data, isLoading, isError } = useQuery({
		queryKey: ["friends", user._id],
		queryFn: getFrinds,
	});
	// function to select specifc user to chat
	const selectFriend = (id) => {
		console.log(id);
		console.log(onLineUser);
		const dataFilterd = data.filter((user) => user._id === id);
		setReciverId(dataFilterd[0]._id);
		SetSelectdFriedn(dataFilterd);
		const IsUserInList = onLineUser.filter((userid) => {
			return userid === id;
		});
		if (IsUserInList.length > 0) {
			setIsOnline(true);
		} else {
			setIsOnline(false);
		}
	};
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 640) {
				setShowChatPage(false);
				setShowAddUser(false);
			}
			if (window.innerWidth < 640) {
				if (isClicked) {
					setShowChatPage(true);
				}
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isClicked]);
	return (
		<div className="bg-slate-900 h-screen sm:grid grid-cols-4">
			{!showAddUser && !showChatPageSm && (
				<div className="lg:col-span-1 sm:col-span-2  h-screen overflow-y-scroll">
					<div className="w-full sm:w-[48.9vw] lg:w-[24.60vw] border-b border-gray-700 border-solid flex items-center justify-around pt-3 pb-3 bg-slate-900 fixed ">
						<div>
							<img
								src={
									user.profilePicture
										? user.profilePicture
										: "./images/avater.svg"
								}
								alt=""
								className="w-10 rounded-[100px]  "
							/>
							<p className="text-xs text-gray-300 font-thin">{user.email}</p>
						</div>
						<div>
							<Link to="/" className="text-gray-300">
								<IoMdHome className="text-3xl text-slate-300 border-b-transparent border-b-4 rounded-sm border-solid hover:border-orange-400 transition-colors duration-300 ease-in-out " />
							</Link>
						</div>
						<div>
							<Link className="text-gray-300">
								<IoIosPerson className="text-3xl text-slate-300   border-b-4 rounded-sm border-solid border-orange-400" />
							</Link>
						</div>
						<div>
							<IoMdAdd
								className="text-3xl text-slate-300 border-b-transparent border-b-4 rounded-sm border-solid hover:border-orange-400 transition-colors duration-300 ease-in-out cursor-pointer"
								onClick={() => {
									setShowAddUser(!showAddUser);
								}}
							/>
						</div>
					</div>
					<Frinds
						data={data}
						isError={isError}
						isLoading={isLoading}
						selectFriend={selectFriend}
						getChatHistory={getChatHistory}
						setShowChatPage={setShowChatPage}
						lastMessage={lastMessage}
						message={message}
						setIsClicked={setIsClicked}
					/>
				</div>
			)}

			{showAddUser && (
				<AddUser
					showAddUser={showAddUser}
					setShowAddUser={setShowAddUser}
					addFriendAndRemoveFriend={addFriendAndRemoveFriend}
				/>
			)}
			{showModal && (
				<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-slate-800 bg-opacity-40">
					<div className="text-blackBlue bg-orange-100 p-5 rounded-lg">
						<p>Do You Wante To Delete This Messege</p>
						<div className="flex justify-around pt-6">
							<button
								className="bg-red-500 px-3 py-1 rounded-lg"
								onClick={() => {
									deleteChat();
									setShowModal(false);
								}}>
								Yes
							</button>{" "}
							<button
								className="bg-green-500 px-3 py-1 rounded-lg"
								onClick={() => setShowModal(!showModal)}>
								No
							</button>
						</div>
					</div>
				</div>
			)}
			{showChatPageSm && (
				<ChatUiSm
					showChatPageSm={showChatPageSm}
					setShowChatPage={setShowChatPage}
					selectedFriend={selectedFriend}
					chatHistory={chatHistory}
					getChatHistory={getChatHistory}
					setMessage={setMessage}
					message={message}
					insertChat={insertChat}
					showModal={showModal}
					setShowModal={setShowModal}
					setChatId={setChatId}
				/>
			)}

			<div className="bg-slate-950 lg:col-span-3 sm:col-span-2 relative h-screen overflow-y-scroll hidden sm:block">
				<div className="bg-slate-900 flex items-center pl-4 pt-8 pb-6 fixed sm:w-[50vw] lg:w-[75vw]">
					{selectedFriend.length > 0 && (
						<img
							src={
								selectedFriend[0]?.profilePicture
									? selectedFriend[0]?.profilePicture
									: "./images/avater.svg"
							}
							alt=""
							className="w-10 rounded-[100px] "
						/>
					)}
					<div>
						<p className="text-slate-300 ml-3 text-sm -mb-4 font-normal">
							{selectedFriend[0]?.fullName}
						</p>
						<p className="mt-[13px] text-slate-300 ml-3 font-thin text-xs">
							{selectedFriend.length > 0
								? isOnline
									? "online"
									: "offline"
								: ""}
						</p>
					</div>
				</div>

				{selectedFriend?.length === 0 && (
					<div className="bg-slate-950 lg:col-span-3 sm:col-span-2 hidden  text-center  sm:flex justify-center items-center h-screen">
						<p className="text-slate-300 capitalize">
							select Friend to Start messaging
						</p>
					</div>
				)}
				<Chat
					chatHistory={chatHistory}
					selectedFriend={selectedFriend}
					setMessage={setMessage}
					message={message}
					insertChat={insertChat}
					handleFile={handleFile}
					showModal={showModal}
					setShowModal={setShowModal}
					setChatId={setChatId}
				/>
			</div>
			{imagePreview && (
				<div className="fixed right-0 left-0 top-0 bottom-0">
					<div className="  fixed w-[70vw]  sm:w-[50vw]  lg:w-[400px]  left-0 right-0  top-16 bg-slate-800   p-5 rounded-xl mx-auto ">
						<div className=" relative">
							{picker && (
								<div className=" absolute bottom-16 -right-20  ">
									<EmojiPicker
										theme="dark"
										height={220}
										style={{
											backgroundColor: "#0F172A",
											width: "80%",
										}}
										onEmojiClick={onEmojiClick}
										previewConfig={{
											showPreview: false,
										}}
									/>
								</div>
							)}
							<img
								src={imagePreview}
								alt="hello"
								className="max-w-full  max-h-[50vh] object-contain mb-2 rounded-2xl"
							/>
							<input
								type="checkbox"
								id="check"
								checked={iSchecked}
								onChange={() => setIsChecked(!iSchecked)}
							/>{" "}
							<label htmlFor="check" className="text-orange-200">
								{" "}
								Add Caption
							</label>
							{iSchecked && (
								<div className="flex items-center">
									<input
										autoFocus
										onChange={(e) => setCaption(e.target.value)}
										type="text"
										value={caption}
										placeholder="write caption"
										className="bg-slate-700  mb-2 w-full   rounded-xl border-transparent outline-none px-1  py-2 text-slate-100 font-thin border-b border-slate-300 "
									/>
									<button
										className="text-2xl  text-orange-100 -ml-8 "
										onClick={() => setPicker(!picker)}>
										<MdOutlineEmojiEmotions />
									</button>
								</div>
							)}
							<div
								className={`flex justify-start ${
									!iSchecked ? "mt-3" : "mt-0"
								}`}>
								<button
									className="text-orange-100 bg-green-800 py-1 px-2 rounded-lg "
									onClick={insertChat}>
									send{" "}
								</button>
								<button
									className="text-orange-100 bg-red-400 py-1 px-2 rounded-lg ml-3"
									onClick={() => setImagePreview(null)}>
									Cancel{" "}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default ChatUi;
