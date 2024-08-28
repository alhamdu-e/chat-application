import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";

function Footer() {
	const date = new Date().getFullYear();
	return (
		<div
			className="bg-slate-900 pb-4 pt-40"
			style={{
				clipPath:
					"polygon(72% 6%, 100% 23%, 100% 60%, 100% 100%, 0 100%, 0 25%, 26% 6%)",
			}}>
			<div className="bg-slate-900  pt-10 pb-10  pl-10 pr-10 grid sm:grid-cols-2 sm:pl-0 ">
				<div className="text-sm font-thin text-gray-300 flex justify-evenly mb-7  ">
					<p className="text-2xl md:text-xl">
						<FaTiktok className="inline" />{" "}
						<span className=" hidden lg:inline">Twiter</span>
					</p>
					<p className="text-2xl md:text-xl">
						{" "}
						<FaTwitter className="inline" />
						<span className=" hidden lg:inline">Twiter</span>
					</p>
					<p className="text-2xl md:text-xl">
						{" "}
						<FaFacebook className="inline" />{" "}
						<span className=" hidden lg:inline">FaceBook</span>
					</p>
					<p className="text-2xl md:text-xl">
						<LuInstagram className="inline" />{" "}
						<span className=" hidden lg:inline">Instagram</span>
					</p>
				</div>

				<div className="flex flex-col sm:flex-row sm:ml-5  md:justify-between lg:justify-around ">
					<input
						type="email"
						className="border-none focus:border-none bg-orange-100 outline-none  outline-offset-0  rounded-md mb-5 py-2 sm:w-full "
						style={{ boxShadow: "0 0 0 0.4rem rgba(253, 249, 233, 0.5)" }}
					/>
					<button className="bg-slate-400 rounded-xl py-2 sm:px-3 sm:py-[13px] sm:ml-6 lg:px-5   sm:-mt-2 sm:self-center">
						Subscribe
					</button>
				</div>
			</div>
			<div className="text-center">
				<p className="text-gray-300 font-thin text-sm ">
					Copyright &copy;{date} by Alhamdu Bedewe.All right Reserved{" "}
				</p>
			</div>
		</div>
	);
}

export default Footer;
