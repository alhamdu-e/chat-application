import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";

function Footer() {
	return (
		<div className="bg-slate-900  grid grid-cols-1 px-12 gap-3 pt-16 sm:grid-cols-3 pb-10 justify-center items-center">
			<div className="text-md font-thin text-slate-200 flex justify-between mr-10">
				<p>
					<FaTiktok className="inline" />{" "}
					<span className="hidden sm:inline">Twiter</span>
				</p>
				<p>
					{" "}
					<FaTwitter className="inline" />
					<span className="hidden sm:inline">Twiter</span>
				</p>
				<p>
					{" "}
					<FaFacebook className="inline" />{" "}
					<span className="hidden  sm:inline">FaceBook</span>
				</p>
				<p>
					<LuInstagram className="inline" />{" "}
					<span className=" hidden sm:inline">Instagram</span>
				</p>
			</div>

			{/* <div className="text-sm font-thin text-slate-200">
				<p>
					<FaPhoneAlt className="inline" /> +251964676678
				</p>
				<p className="text-sm font-thin">
					{" "}
					<IoLocationSharp className="inline" /> Addis Abeba,Ethiopia
				</p>
				<p>
					{" "}
					<MdOutlineMail className="inline" /> alhamdu7624@gmail.com
				</p>
			</div> */}
			<div className="flex items-center flex-col sm:flex-row">
				<input
					type="email"
					className="border-none focus:border-none bg-gray-400 outline-none  outline-offset-0  rounded-md "
					style={{ boxShadow: "0 0 0 0.4rem rgba(253, 249, 233, 0.5)" }}
				/>
				<button className="ml-5 bg-slate-300 px-6 py-2 rounded-xl mt-4 sm:mt-0 ">
					Subscribe
				</button>
			</div>
		</div>
	);
}

export default Footer;
