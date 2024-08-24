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
import { useQuery } from "@tanstack/react-query";
import Chat from "./Chat";

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

	const user = JSON.parse(localStorage.getItem("user"));

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
			} catch (error) {
				console.log(error);
			}
		}
		retriveLastMessage();
	}, [user._id, chatHistory]);

	useEffect(() => {
		const socket = io("http://127.0.0.1:5000");

		socket.on("connect", () => {
			socket.emit("joinRoom", user._id);
		});
		socket.on("newChat", (data) => {
			SetChatHistory((prev) => [...prev, data]);
		});
		socket.on("disconnect", () => {
			console.log("Disconnected from server");
		});
		return () => {
			socket.disconnect();
		};
	}, [user._id]);

	const getChatHistory = async (friendid) => {
		console.log(friendid, user._id);
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
			console.log(error);
		}
	};

	const insertChat = async () => {
		if (message) {
			setFiles({});
		}
		try {
			console.log(message);
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
			console.log(error);
		}
	};
	// function to Add and Remove Friend
	const addFriendAndRemoveFriend = async (userid, friendid) => {
		try {
			const data = await axios.post(`addorremovefriend/${userid}/${friendid}`);
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	// function to get user friend
	const getFrinds = async ({ queryKey }) => {
		const [, userid] = queryKey;
		try {
			const { data } = await axios.get(`userfriend/${userid}`);
			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	// using React query to fetch
	const { data, isLoading, isError } = useQuery({
		queryKey: ["friends", user._id],
		queryFn: getFrinds,
	});
	// function to select specifc user to chat
	const selectFriend = (id) => {
		const dataFilterd = data.filter((user) => user._id === id);
		setReciverId(dataFilterd[0]._id);
		SetSelectdFriedn(dataFilterd);
	};
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 640) {
				setShowChatPage(false);
			} else {
				setShowChatPage(true);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
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
						{/* <div>
						<IoSearch className="text-3xl text-slate-300" />
					   </div> */}
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
					/>
				</div>
			)}

			{showAddUser && (
				<AddUser
					showAddUser={showAddUser}
					setShowAddUser={setShowAddUser}
					// addRemoviFreindMutaion={addRemoviFreindMutaion}
					addFriendAndRemoveFriend={addFriendAndRemoveFriend}
				/>
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
								? selectedFriend[0].isOnline
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
				/>
			</div>
			{imagePreview && (
				<div className="fixed right-0 left-0 top-0 bottom-0">
					<div className="  fixed w-[70vw]  sm:w-[50vw]  lg:w-[400px]  left-0 right-0  top-16 bg-slate-800   p-5 rounded-xl mx-auto ">
						<img
							src={imagePreview}
							alt="hello"
							className="max-w-full  max-h-[50vh] object-contain mb-2 rounded-2xl"
						/>
						<input type="checkbox" id="check" />{" "}
						<label htmlFor="check" className="text-orange-200">
							{" "}
							Add Caption
						</label>
						<input
							autoFocus
							onChange={(e) => setCaption(e.target.value)}
							type="text"
							value={caption}
							placeholder="write caption"
							className="bg-slate-800  mb-2 w-full  border-transparent outline-none px-1  py-2 text-slate-100 font-thin border-b border-slate-300 "
						/>
						<div className="flex justify-start">
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
			)}
		</div>
	);
}

export default ChatUi;
