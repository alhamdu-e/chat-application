import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
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
	const [message, setMessage] = useState("hi message");
	const [chatHistory, SetChatHistory] = useState([]);

	const user = JSON.parse(localStorage.getItem("user"));

	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [chatHistory]);

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
			console.log(response.data);
			SetChatHistory(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const insertChat = async () => {
		try {
			await axios.post("http://127.0.0.1:5000/chat/newchat", {
				senderId: user._id,
				receiverId: reciverId,
				message: message,
			});
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
	return (
		<div className="bg-slate-900 h-screen sm:grid grid-cols-4 ">
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
				<Chat chatHistory={chatHistory} selectedFriend={selectedFriend} />

				<div className="bg-slate-800 fixed h-12 bottom-0 w pl-4 pr-5 flex right-0  sm:w-[50vw] lg:w-[75vw]">
					<button className="text-2xl  text-orange-100">
						<MdAttachFile />
					</button>

					<input
						autoFocus
						type="text"
						placeholder="Write Messege"
						className="bg-slate-800  border-transparent outline-none px-1 w-[90%] py-2 text-slate-100 font-thin"
					/>

					<button className=" text-2xl text-orange-100" onClick={insertChat}>
						<IoSend />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChatUi;
