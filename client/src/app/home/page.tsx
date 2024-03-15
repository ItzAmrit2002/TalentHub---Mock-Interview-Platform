"use client";
import HomeNavbar from "@/components/HomeNavbar/HomeNavbar";
import LitUpBorderButton from "@/ui-aceternity/Buttons/LitUpBorderButton";
import { SparklesCore } from "@/ui-aceternity/Sparkles/Sparkles";
import { FaArrowDown } from "react-icons/fa";

import React from "react";

const page = () => {
	return (
		<div className="absolute inset-0 z-0 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
			<HomeNavbar />

			<div className="w-full absolute inset-0 h-screen">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={80}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</div>
			<div className="2xl:container mx-auto flex flex-col justify-between min-h-[80%] max-h-fit items-center max-w-full mt-10 z-20">
				<div className="flex flex-col justify-between items-center w-4/6 mx-auto my-0 gap-14">
					<p className="font-mono text-wrap text-[48px] sm:text-[54px] md:text-[62px] lg:text-[68px] text-white text-center">
						Ace Your Tech Interview with Our Mock Interview Platform!
					</p>
					<LitUpBorderButton title="Get Started" />
				</div>

				<span className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:cursor-pointer z-30 hover:scale-110 hover:border-blue-400 hover:border-2">
					<FaArrowDown />
				</span>
			</div>
		</div>
	);
};

export default page;
