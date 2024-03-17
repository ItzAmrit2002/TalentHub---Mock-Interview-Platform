import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/ui-aceternity/Spotlight/Spotlight";
import { BackgroundBeams } from "@/ui-aceternity/BackgroundBeams/background-beams";
import BoxCards from "./BoxCards/BoxCards";
const Home2 = () => {
	return (
		<div className="relative min-h-screen ">
			<div className="min-h-screen w-full  bg-black/[0.96] antialiased bg-grid-white/[0.02] absolute overflow-hidden">
				{/* <Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/> */}
				<BackgroundBeams />
				<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mt-11">
					Join the waitlist
				</h1>
				<div className="w-[85%] mx-auto h-[calc(100vh-200px)] flex justify-center items-center">
					<div className=" flex justify-between items-center z-20">
						<BoxCards />
						<BoxCards />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home2;
