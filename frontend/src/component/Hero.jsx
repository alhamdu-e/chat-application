function Hero() {
	return (
		<div className="bg-customBlue  pt-12 text-center pr-5 pl-5 lg:pt-20 pb-32">
			<div className="md:pt-5 sm:pr-14 sm:pl-14">
				<h1 className=" text-3xl font-extrabold bg-gradient-to-bl from-gr1 to-blue-500 bg-clip-text text-transparent leading-10 rubik-ex sm:text-5xl lg:text-6xl ">
					Connect,
					<span className=" font-extrabold bg-gradient-to-bl from-gr3 to-gr2 bg-clip-text text-transparent leading-normal">
						Chat{" "}
					</span>
					and Celebrate Every Moment
				</h1>
				<div className="pt-5 sm:pr-14 sm:pl-14">
					<p className="text-gray-400  text-sm  md:text-base ">
						Stay connected with friends and family through our user-friendly
						chat app. Enjoy instant messaging, media sharing, and more. Start
						chatting today!
					</p>
					<button className="text-white btn-grad mt-8 px-5 py-2 md:px-7 md:py-2  w-fit">
						Join Now <span className="text-3xl font-extrabold">&#8594;</span>
					</button>
				</div>
			</div>
			<div className="grid  grid-cols-1 md:grid-cols-2">
				<img src="./images/im4.png" alt="" className="w-full" />
				<img src="./images/im8.png" alt="" className="w-full  opacity-90" />
			</div>
		</div>
	);
}

export default Hero;
