function Hero() {
	return (
		<div className="bg-customBlue  pt-10 text-center pr-5 pl-5   ">
			<div className="md:pt-5">
				<h1 className=" text-3xl font-extrabold bg-gradient-to-bl from-gr1 to-blue-500 bg-clip-text text-transparent leading-10 rubik-ex sm:text-5xl lg:text-7xl ">
					Connect,
					<span className=" font-extrabold bg-gradient-to-bl from-gr3 to-gr2 bg-clip-text text-transparent leading-normal">
						Chat{" "}
					</span>
					and Celebrate Every Moment
				</h1>
				<div className="pt-5">
					<p className="text-gray-400  text-sm italic ">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						aspernatur
					</p>
					<button className="text-white btn-grad mt-6">Get Started</button>
				</div>
			</div>
			<div className="grid  grid-cols-1 md:grid-cols-2">
				<img src="./images/im4.png" alt="" className="w-full" />
				<img src="./images/im8.png" alt="" className="w-full" />
			</div>
		</div>
	);
}

export default Hero;
