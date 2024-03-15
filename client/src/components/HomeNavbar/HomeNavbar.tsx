import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui-shadcn/avatar";
import ShimmerButton from "@/ui-aceternity/Buttons/ShimmerButton";
import { CiMenuBurger } from "react-icons/ci";

const HomeNavbar = () => {
	return (
		<div className="sticky w-screen bg-transparent h-16 flex justify-between items-center pt-7 z-40">
			<div className="flex justify-center items-center gap-4 ml-10">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<h3 className="font-sans lg:text-2xl font-bold text-white">
					TalentHub
				</h3>
			</div>

			<div className="md:flex md:justify-center md:items-center md:gap-11 md:lg:text-[18px] md:text-white md:font-semibold  hidden">
				<h3 className="font-serif cursor-pointer">Home</h3>
				<h3 className="font-serif cursor-pointer">Jobs</h3>
				<h3 className="font-serif cursor-pointer">Companies</h3>
				<h3 className="font-serif cursor-pointer">About</h3>
			</div>

			<div className="md:flex md:justify-center md:items-center md:gap-8 md:mr-10 md:lg:text-[17px] md:text-[#ffffff] md:font-semibold  z-40 hidden">
				<ShimmerButton title="Login" />
				<ShimmerButton title="Signup" />
			</div>
			<button className="p-[3px] relative md:hidden mr-9">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            	<div className="font-sans px-4 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
			<CiMenuBurger />
            </div>
        </button>
		</div>
	);
};

export default HomeNavbar;
