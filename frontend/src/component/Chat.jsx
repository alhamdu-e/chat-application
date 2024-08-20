import { useEffect, useRef } from "react";

function Chat({ chatHistory, selectedFriend }) {
	const user = JSON.parse(localStorage.getItem("user"));
	const messagesEndRef = useRef(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [chatHistory]);
	return (
		<div>
			{selectedFriend?.length > 0 && (
				<div className="pl-2 pr-2  grid  grid-cols-1 gap-10 pt-32 lg:gap-5 pb-20">
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
									className={` text-orange-100 font-thin p-3 rounded-lg shadow max-w-xs ${
										msg.sender === user._id ? "bg-[#071952]" : "bg-[#134B70]"
									}`}>
									<p>{msg.message}</p>
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
		</div>
	);
}

export default Chat;
