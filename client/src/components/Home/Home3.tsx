import React from "react";
import { LampContainer } from "@/ui-aceternity/LampEffect/lamp";
import { motion } from "framer-motion";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel"; // Import the missing type

const Home3 = () => {
	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDE_COUNT = 5;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
	return (
		<LampContainer>
			{/* <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Build lamps <br /> the right way
    </motion.h1> */}
			<div className="w-screen relative top-32 ">
				<EmblaCarousel slides={SLIDES} options={OPTIONS} />
			</div>
		</LampContainer>
	);
};

export default Home3;
