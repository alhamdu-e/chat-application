import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
// import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

function ChatUi() {
	const [showAddUser, setShowAddUser] = useState(false);
	return (
		<div className="bg-slate-900 h-screen sm:grid grid-cols-4 ">
			{!showAddUser && (
				<div className="lg:col-span-1 sm:col-span-2  h-screen overflow-y-scroll">
					<div className="w-full sm:w-[48.9vw] lg:w-[24.60vw] border-b border-gray-700 border-solid flex items-center justify-around pt-7 pb-3 bg-slate-900 fixed ">
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
								<IoMdHome className="text-3xl text-slate-300" />
							</Link>
						</div>
						<div>
							<Link className="text-gray-300">
								<IoIosPerson className="text-3xl text-slate-300 border border-solid" />
							</Link>
						</div>
						<div>
							<IoMdAdd
								className="text-3xl text-slate-300"
								onClick={() => setShowAddUser(!showAddUser)}
							/>
						</div>
						{/* <div>
						<IoSearch className="text-3xl text-slate-300" />
					</div> */}
					</div>
					<div className="flex items-center justify-start ml-2 pt-5 pb-5">
						<img
							src="./images/p2.jpg"
							alt=""
							className="w-14  rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-gray-400">Alhamdu bedewe</h2>
								<p className="text-gray-400 font-thin text-sm">hey how are u</p>
							</div>

							<p className="text-gray-300">5:30 PM</p>
						</div>
					</div>
					<div className="flex items-center justify-start ml-2 pt-5 pb-5">
						<img
							src="./images/p1.jpg"
							alt=""
							className="w-14  rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-gray-400">Alhamdu bedewe</h2>
								<p className="text-gray-400 font-thin text-sm">hey how are u</p>
							</div>

							<p className="text-gray-300">5:30 PM</p>
						</div>
					</div>
					<div className="flex items-center justify-start ml-2 pt-5 pb-5">
						<img
							src="./images/p3.jpg"
							alt=""
							className="w-14  rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-gray-400">Alhamdu bedewe</h2>
								<p className="text-gray-400 font-thin text-sm">hey how are u</p>
							</div>

							<p className="text-gray-300">5:30 PM</p>
						</div>
					</div>
					<div className="flex items-center justify-start ml-2 pt-5 pb-5">
						<img
							src="./images/p4.jpg"
							alt=""
							className="w-14 rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-gray-400">Alhamdu bedewe</h2>
								<p className="text-gray-400 font-thin text-sm">hey how are u</p>
							</div>

							<p className="text-gray-300">5:30 PM</p>
						</div>
					</div>
					<div className="flex items-center justify-start ml-2 pt-5 pb-5">
						<img
							src="./images/p5.jpg"
							alt=""
							className="w-14  rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-gray-400">Alhamdu bedewe</h2>
								<p className="text-gray-400 font-thin text-sm">hey how are u</p>
							</div>

							<p className="text-gray-300">5:30 PM</p>
						</div>
					</div>
					<div className="flex items-center justify-start ml-2 pt-5 pb-5">
						<img
							src="./images/p5.jpg"
							alt=""
							className="w-14  rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-gray-400">Alhamdu bedewe</h2>
								<p className="text-gray-400 font-thin text-sm">hey how are u</p>
							</div>

							<p className="text-gray-300">5:30 PM</p>
						</div>
					</div>
					<div className="flex items-center justify-start ml-2 pt-5 pb-5">
						<img
							src="./images/p5.jpg"
							alt=""
							className="w-14  rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-gray-400">Alhamdu bedewe</h2>
								<p className="text-gray-400 font-thin text-sm">hey how are u</p>
							</div>

							<p className="text-gray-300">5:30 PM</p>
						</div>
					</div>
					<div className="flex items-center justify-start ml-2 pt-5 pb-5">
						<img
							src="./images/p5.jpg"
							alt=""
							className="w-14  rounded-[100px]  "
						/>
						<div className="ml-2 flex justify-between w-full mr-4">
							<div>
								<h2 className="text-gray-400">Alhamdu bedewe</h2>
								<p className="text-gray-400 font-thin text-sm">hey how are u</p>
							</div>

							<p className="text-gray-300">5:30 PM</p>
						</div>
					</div>
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

			<div className="bg-slate-950 lg:col-span-3 sm:col-span-2 hidden  text-center  sm:flex justify-center items-center h-screen">
				<p className="text-slate-300 capitalize">
					select chat to Start messaging
				</p>
			</div>
		</div>
	);
}

export default ChatUi;
