import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

function ChatUi() {
	return (
		<div className="bg-slate-900 min-h-screen sm:grid grid-cols-2">
			<div>
				<div className=" border-b border-gray-400 border-solid flex items-center justify-around pt-7 pb-3 bg-slate-950">
					<img
						src="./images/p5.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div>
						<Link to="/" className="text-gray-300">
							<IoMdHome className="text-3xl text-slate-300" />
						</Link>
					</div>
					<div>
						<Link className="text-gray-300">
							<IoIosPerson className="text-3xl text-slate-300" />
						</Link>
					</div>
					<div>
						<Link className="text-gray-300">
							<IoMdAdd className="text-3xl text-slate-300" />
						</Link>
					</div>
					<div>
						<input type="text" className="w-full" />
					</div>
				</div>
				<div className="flex items-center justify-start ml-2 pt-5 pb-5">
					<img
						src="./images/p2.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div className="ml-2 flex justify-between w-full mr-4">
						<div>
							<h2 className="text-gray-400">Alhamdu bedewe</h2>
							<p className="text-gray-400">hey how are u</p>
						</div>

						<p className="text-gray-300">5:30 PM</p>
					</div>
				</div>
				<div className="flex items-center justify-start ml-2 pt-5 pb-5">
					<img
						src="./images/p1.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div className="ml-2 flex justify-between w-full mr-4">
						<div>
							<h2 className="text-gray-400">Alhamdu bedewe</h2>
							<p className="text-gray-400">hey how are u</p>
						</div>

						<p className="text-gray-300">5:30 PM</p>
					</div>
				</div>
				<div className="flex items-center justify-start ml-2 pt-5 pb-5">
					<img
						src="./images/p3.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div className="ml-2 flex justify-between w-full mr-4">
						<div>
							<h2 className="text-gray-400">Alhamdu bedewe</h2>
							<p className="text-gray-400">hey how are u</p>
						</div>

						<p className="text-gray-300">5:30 PM</p>
					</div>
				</div>
				<div className="flex items-center justify-start ml-2 pt-5 pb-5">
					<img
						src="./images/p4.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div className="ml-2 flex justify-between w-full mr-4">
						<div>
							<h2 className="text-gray-400">Alhamdu bedewe</h2>
							<p className="text-gray-400">hey how are u</p>
						</div>

						<p className="text-gray-300">5:30 PM</p>
					</div>
				</div>
				<div className="flex items-center justify-start ml-2 pt-5 pb-5">
					<img
						src="./images/p5.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div className="ml-2 flex justify-between w-full mr-4">
						<div>
							<h2 className="text-gray-400">Alhamdu bedewe</h2>
							<p className="text-gray-400">hey how are u</p>
						</div>

						<p className="text-gray-300">5:30 PM</p>
					</div>
				</div>
				<div className="flex items-center justify-start ml-2 pt-5 pb-5">
					<img
						src="./images/p5.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div className="ml-2 flex justify-between w-full mr-4">
						<div>
							<h2 className="text-gray-400">Alhamdu bedewe</h2>
							<p className="text-gray-400">hey how are u</p>
						</div>

						<p className="text-gray-300">5:30 PM</p>
					</div>
				</div>
				<div className="flex items-center justify-start ml-2 pt-5 pb-5">
					<img
						src="./images/p5.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div className="ml-2 flex justify-between w-full mr-4">
						<div>
							<h2 className="text-gray-400">Alhamdu bedewe</h2>
							<p className="text-gray-400">hey how are u</p>
						</div>

						<p className="text-gray-300">5:30 PM</p>
					</div>
				</div>
				<div className="flex items-center justify-start ml-2 pt-5 pb-5">
					<img
						src="./images/p5.jpg"
						alt=""
						className="w-20 rounded-[100px]  "
					/>
					<div className="ml-2 flex justify-between w-full mr-4">
						<div>
							<h2 className="text-gray-400">Alhamdu bedewe</h2>
							<p className="text-gray-400">hey how are u</p>
						</div>

						<p className="text-gray-300">5:30 PM</p>
					</div>
				</div>
			</div>

			<div className="bg-slate-950">
				<p>select chart to Start messaging</p>
			</div>
		</div>
	);
}

export default ChatUi;
