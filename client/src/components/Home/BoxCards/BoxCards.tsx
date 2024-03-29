import { Meteors } from "@/ui-aceternity/Meteor/meteors";
import Image from "next/image";
import React from "react";
import { Button, MovingBorder } from "@/ui-aceternity/Buttons/MovingBorder";

const BoxCards = ({
	title,
	desc,
	file,
}: {
	title: string;
	desc: string;
	file: string;
}) => {
	return (
		<div className="shadow-xl bg-black border border-gray-800 px-4 pb-8 h-full overflow-hidden rounded-2xl text-center sm:w-[600px] z-0 relative my-auto w-[80%]">
			<Meteors number={50} />
			<div className="relative w-[60%] h-[50%] mx-auto">
				<Image src={file} alt="student" fill objectFit="contain" />
			</div>

			<div className="flex flex-col justify-evenly items-center h-[50%]">
				<h1 className="font-bold text-xl text-white mb-4 ">{title}</h1>

				<p className="font-normal text-base text-slate-500 mb-4">{desc}</p>

				{/* <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
					Explore
				</button> */}
				<div className="h-[70px] ">
					<Button
						borderRadius="1.75rem"
						className="border px-4 py-1 border-gray-500 text-gray-300">
						Get started
					</Button>
				</div>
			</div>
		</div>
	);
};

export default BoxCards;
