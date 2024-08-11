import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Testomoni() {
	return (
		<div>
			{/* <Slider {...settings}> */}
			<Carousel {...{ autoPlay: true, interval: 1000, infiniteLoop: true }}>
				<div
					className="bg-slate-900 mx-5 sm:mx-14 md:mx-28 mb-32 px-7 py-14 rounded-[22px] "
					style={{
						boxShadow: "rgba(255, 255, 255, 0.4) 30px 30px 30px -20px inset",
					}}>
					<div className="flex items-center w-fit mx-auto  ">
						<img
							src="./images/p1.jpg"
							alt=""
							className="!w-20 rounded-[100px]"
						/>
						<div className="pl-6">
							<span className="text-slate-200  font-normale">
								ALhamdu Bedewe
							</span>
							<p className="text-slate-400 font-thin">Addis Ababa,Ethiopia</p>
						</div>
					</div>

					<div className=" sm:px-20">
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 57 57"
							fill="#cce05e"
							width="100"
							height="100"
							className="-ml-5">
							<g>
								<circle cx="18.5" cy="31.5" r="5.5" />
								<path
									d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z
		 M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z"
								/>
							</g>
							<g>
								<circle cx="35.5" cy="31.5" r="5.5" />
								<path
									d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z
		 M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z"
								/>
							</g>
							<path
								d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
	c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"
							/>
							<path
								d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
	c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"
							/>
						</svg>
						<p className="text-slate-300 font-thin italic -mt-6 xl:text-lg ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Temporibus, ea dolorum. Autem aut quasi vero facilis porro,
							similique perferendis quas modi impedit soluta deserunt, minima
							minus aperiam dolores odit laudantium.
						</p>
					</div>
				</div>
				<div
					className="bg-slate-900 mx-5 sm:mx-14 md:mx-28 mb-32 px-7 py-14 rounded-[22px] "
					style={{
						boxShadow: "rgba(255, 255, 255, 0.4) 30px 30px 30px -20px inset",
					}}>
					<div className="flex items-center w-fit mx-auto  ">
						<img
							src="./images/p5.jpg"
							alt=""
							className="!w-20 rounded-[100px]"
						/>
						<div className="pl-6">
							<span className="text-slate-200  font-normale">
								Ahlam Nuredin
							</span>
							<p className="text-slate-400 font-thin">Addis Ababa,Ethiopia</p>
						</div>
					</div>

					<div className=" sm:px-20">
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 57 57"
							fill="#cce05e"
							width="100"
							height="100"
							className="-ml-5">
							<g>
								<circle cx="18.5" cy="31.5" r="5.5" />
								<path
									d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z
		 M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z"
								/>
							</g>
							<g>
								<circle cx="35.5" cy="31.5" r="5.5" />
								<path
									d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z
		 M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z"
								/>
							</g>
							<path
								d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
	c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"
							/>
							<path
								d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
	c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"
							/>
						</svg>
						<p className="text-slate-300 font-thin italic -mt-6 xl:text-lg ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Temporibus, ea dolorum. Autem aut quasi vero facilis porro,
							similique perferendis quas modi impedit soluta deserunt, minima
							minus aperiam dolores odit laudantium.
						</p>
					</div>
				</div>
				<div
					className="bg-slate-900 mx-5 sm:mx-14 md:mx-28 mb-32 px-7 py-14 rounded-[22px] "
					style={{
						boxShadow: "rgba(255, 255, 255, 0.4) 30px 30px 30px -20px inset",
					}}>
					<div className="flex items-center w-fit mx-auto  ">
						<img
							src="./images/p2.jpg"
							alt=""
							className="!w-20 rounded-[100px]"
						/>
						<div className="pl-6">
							<span className="text-slate-200  font-normale">
								Abdurezak Muhidin
							</span>
							<p className="text-slate-400 font-thin">Addis Ababa,Ethiopia</p>
						</div>
					</div>

					<div className=" sm:px-20">
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 57 57"
							fill="#cce05e"
							width="100"
							height="100"
							className="-ml-5">
							<g>
								<circle cx="18.5" cy="31.5" r="5.5" />
								<path
									d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z
		                     M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z"
								/>
							</g>
							<g>
								<circle cx="35.5" cy="31.5" r="5.5" />
								<path
									d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z
		                       M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z"
								/>
							</g>
							<path
								d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
	                     c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"
							/>
							<path
								d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
	                     c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"
							/>
						</svg>
						<p className="text-slate-300 font-thin italic -mt-6 xl:text-lg ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Temporibus, ea dolorum. Autem aut quasi vero facilis porro,
							similique perferendis quas modi impedit soluta deserunt, minima
							minus aperiam dolores odit laudantium.
						</p>
					</div>
				</div>
				<div
					className="bg-slate-900 mx-5 sm:mx-14 md:mx-28 mb-32 px-7 py-14 rounded-[22px] "
					style={{
						boxShadow: "rgba(255, 255, 255, 0.4) 30px 30px 30px -20px inset",
					}}>
					<div className="flex items-center w-fit mx-auto  ">
						<img
							src="./images/women.jpg"
							alt=""
							className="!w-20 rounded-[100px]"
						/>
						<div className="pl-6">
							<span className="text-slate-200  font-normale">
								Bethelhem Teklil
							</span>
							<p className="text-slate-400 font-thin">Addis Ababa,Ethiopia</p>
						</div>
					</div>

					<div className=" sm:px-20">
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 57 57"
							fill="#cce05e"
							width="100"
							height="100"
							className="-ml-5">
							<g>
								<circle cx="18.5" cy="31.5" r="5.5" />
								<path
									d="M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z
		                     M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z"
								/>
							</g>
							<g>
								<circle cx="35.5" cy="31.5" r="5.5" />
								<path
									d="M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z
		                       M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z"
								/>
							</g>
							<path
								d="M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
	                     c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z"
							/>
							<path
								d="M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1
	                     c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z"
							/>
						</svg>
						<p className="text-slate-300 font-thin italic -mt-6 xl:text-lg ">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Temporibus, ea dolorum. Autem aut quasi vero facilis porro,
							similique perferendis quas modi impedit soluta deserunt, minima
							minus aperiam dolores odit laudantium.
						</p>
					</div>
				</div>
			</Carousel>
			{/* </Slider> */}
		</div>
	);
}

export default Testomoni;
