import React from "react";
import { LampContainer } from "@/ui-aceternity/LampEffect/lamp";
import { motion } from "framer-motion";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel"; // Import the missing type
import StackIcon from "tech-stack-icons";

const Home3 = () => {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 5;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<div className="top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
			<div className="absolute w-full h-sreen">
				<h2
					className={
						"text-white text-center font-Lily_Script_One font-bold text-5xl md:text-5xl mt-10"
					}>
					Testimonials from our Students
				</h2>
				<div className="w-full h-full">
					<EmblaCarousel slides={SLIDES} options={OPTIONS} />
				</div>
				<div className="flex justify-around items-center ">
					<StackIcon name="nodejs" />
					<StackIcon name="mongodb" />
					<StackIcon name="postgresql" />
					<StackIcon name="mysql" />
					<StackIcon name="reactjs" />;
					<StackIcon name="c++" />
					<StackIcon name="java" />
				</div>
			</div>
		</div>
	);
};

export default Home3;
