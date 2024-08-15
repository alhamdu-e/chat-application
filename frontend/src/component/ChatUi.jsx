import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
// import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Frinds from "./Frinds";
import { IoSend } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

function ChatUi() {
	const [showAddUser, setShowAddUser] = useState(false);
	return (
		<div className="bg-slate-900 h-screen sm:grid grid-cols-4 ">
			{!showAddUser && (
				<div className="lg:col-span-1 sm:col-span-2  h-screen overflow-y-scroll">
					<div className="w-full sm:w-[48.9vw] lg:w-[24.60vw] border-b border-gray-700 border-solid flex items-center justify-around pt-3 pb-3 bg-slate-900 fixed ">
						<div>
							<img
								src="./images/p5.jpg"
								alt=""
								className="w-14 rounded-[100px]  "
							/>
							<p className="text-xs text-gray-300 font-thin">Alhamdu Bedewe</p>
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
								onClick={() => setShowAddUser(!showAddUser)}
							/>
						</div>
						{/* <div>
						<IoSearch className="text-3xl text-slate-300" />
					   </div> */}
					</div>
					<Frinds />
				</div>
			)}
			{showAddUser && (
				<div className="lg:col-span-1 sm:col-span-2  h-screen overflow-y-scroll">
					<div className="w-full sm:w-[48.9vw] lg:w-[24.60vw] border-b border-gray-700 border-solid flex items-center justify-around pt-7 pb-5 bg-slate-900 fixed ">
						<IoIosArrowBack
							className="text-slate-100 text-4xl ml-4"
							onClick={() => setShowAddUser(!showAddUser)}
						/>
						<input
							type="text"
							placeholder="Start typing"
							className="focus:border-none focus:outline-none px-2 py-1 rounded-lg w-full ml-6 mr-8 bg-orange-100"
						/>
					</div>
					<div className="pt-20 pl-4">
						<div className="flex items-center justify-start ml-2 pt-5">
							<img
								src="./images/p5.jpg"
								alt=""
								className="w-10  rounded-[100px]  "
							/>
							<div className="ml-2 flex justify-between w-full mr-4">
								<div>
									<h2 className="text-gray-400">Alhamdu bedewe</h2>
								</div>
								<button className="bg-slate-300 py-1 px-2 rounded-md font-semibold hover:bg-slate-50 transition-colors  ease-out duration-[7000] text-sm">
									Add
								</button>
							</div>
						</div>
						<div className="flex items-center justify-start ml-2 pt-5 ">
							<img
								src="./images/p5.jpg"
								alt=""
								className="w-10 rounded-[100px]  "
							/>
							<div className="ml-2 flex justify-between w-full mr-4">
								<div>
									<h2 className="text-gray-400">Alhamdu bedewe</h2>
								</div>
								<button className="bg-slate-300 py-1 px-2 rounded-md font-semibold hover:bg-slate-50 transition-colors  ease-out duration-[7000] text-sm">
									Add
								</button>
							</div>
						</div>
						<div className="flex items-center justify-start ml-2 pt-5">
							<img
								src="./images/p5.jpg"
								alt=""
								className="w-10  rounded-[100px]  "
							/>
							<div className="ml-2 flex justify-between w-full mr-4">
								<div>
									<h2 className="text-gray-400">Alhamdu bedewe</h2>
								</div>
								<button className="bg-slate-300 py-1 px-2 rounded-md font-semibold hover:bg-slate-50 transition-colors  ease-out duration-[7000] text-sm">
									Add
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* <div className="bg-slate-950 lg:col-span-3 sm:col-span-2 hidden  text-center  sm:flex justify-center items-center h-screen">
				<p className="text-slate-300 capitalize">
					select chat to Start messaging
				</p>
			</div> */}

			<div className="bg-slate-950 lg:col-span-3 sm:col-span-2 relative h-screen overflow-y-scroll">
				<div className="bg-slate-900 flex items-center pl-4 pt-8 pb-6 fixed sm:w-[50vw] lg:w-[75vw]">
					<img
						src="./images/p5.jpg"
						alt=""
						className="w-10 rounded-[100px]  "
					/>
					<p className="text-slate-300 ml-3 font-thin">Alhamdu Bedewe</p>
				</div>

				<div className="pl-2 pr-2  grid  grid-cols-1 gap-10 pt-32 lg:gap-5">
					<div class="flex items-start space-x-2 ">
						<img
							src="./images/p5.jpg"
							alt="User Avatar"
							class="w-10 h-10 rounded-full"
						/>
						<div class="bg-[#134B70] p-3 rounded-lg shadow max-w-xs">
							<p class="text-orange-100 font-thin">
								I'm good, thanks! How about you?
							</p>
							<span class="text-xs text-orange-100 font-thin">10:00 AM</span>
						</div>
					</div>

					<div class="flex items-start justify-end space-x-2">
						<div class="bg-[#071952] text-orange-100 font-thin p-3 rounded-lg shadow max-w-xs">
							<p>I'm good, thanks! How about you?</p>
							<span class="text-xs text-blue-200">10:01 AM</span>
						</div>
						<img
							src="./images/p5.jpg"
							alt="My Avatar"
							class="w-10 h-10 rounded-full"
						/>
					</div>
				</div>

				<div className="bg-slate-800 fixed h-12 bottom-0 w pl-4 pr-5 flex right-0  sm:w-[50vw] lg:w-[75vw]">
					<button className="text-2xl  text-orange-100">
						<MdAttachFile />
					</button>

					<input
						type="text"
						placeholder="Write Messege"
						className="bg-slate-800 focus border-transparent outline-none px-1 w-[90%] py-2 text-slate-100 font-thin"
					/>

					<button className=" text-2xl text-orange-100">
						<IoSend />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChatUi;
