import { useState } from "react";

function Navbar() {
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<header className="bg-customBlue pr-5 pl-5 pt-3 pb-2  sm:flex justify-between items-center">
			<div className="flex items-center justify-between pr-5 pl-5 pt-3 pb-2">
				<div>
					<img src="./images/m1.png" alt="" className="w-8" />
				</div>
				<div className="sm:hidden">
					<button
						type="button"
						className="text-gray-300 focus:text-white hover:text-white"
						onClick={() => setShowNavbar(!showNavbar)}>
						<svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
							{!showNavbar && (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
							{showNavbar && (
								<path
									fillRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							)}
						</svg>
					</button>
				</div>
			</div>
			<div
				className={`${
					showNavbar ? "block" : "hidden"
				} sm:block flex items-center justify-around`}>
				<div>
					<a
						href="#home"
						className="inline-block text-white hover:bg-gray-700 rounded px-4">
						Home
					</a>
					<a
						href="#home"
						className="inline-block text-white hover:bg-gray-700 rounded px-4 mt-1">
						Login
					</a>
					<a
						href="#home"
						className="inline-block text-white hover:bg-gray-700 rounded px-4 mt-1">
						Blog
					</a>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
