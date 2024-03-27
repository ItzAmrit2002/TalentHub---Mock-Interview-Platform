import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import { MdOutlineStar } from "react-icons/md";
import Image from "next/image";
import { IconContext } from "react-icons/lib";
import { TypographyBlockquote } from "@/ui-shadcn/blockQuote";

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((index) => (
						<div className="embla__slide" key={index}>
							{/* <div className="embla__slide__number">{index + 1}</div>
              <div className="embla__slide__number">{index + 1}</div> */}
							<Image
								className="embla__slide__img"
								loader={() =>
									"https://xsgames.co/randomusers/assets/avatars/male/23.jpg"
								}
								src={`https://xsgames.co/randomusers/assets/avatars/male/23.jpg`}
								alt=""
								width={120}
								height={120}
							/>
							<div className="testimonial_text font-Lily_Script_One">
								<h2>Hollin Prince</h2>
								<p className="font-Lily_Script_One italic font-medium">
									"Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Magnam tenetur ea dignissimos, aliquam consequuntur assumenda
									illo possimus fugiat soluta autem maxime, est exercitationem
									optio molestiae nihil earum a quas delectus distinctio
									voluptatibus quis! Libero excepturi cumque quod officiis
									voluptas corrupti blanditiis necessitatibus vero, porro
									similique labore, facilis laborum ad deleniti!"
								</p>
								{/* <TypographyBlockquote/> */}
								<div className="flex justify-between items-center w-[90%]">
									<span className="flex items-center justify-start font-Lily_Script_One font-semibold text-xl gap-6">
										Placed At
										<Image src="/google.png" width={60} height={60} alt={""} />
									</span>
									<span className="flex items-center justify-start font-Lily_Script_One font-semibold text-xl gap-6">
										<IconContext.Provider value={{ color: "#f4d201" }}>
											<MdOutlineStar />
											<MdOutlineStar />
											<MdOutlineStar />
											<MdOutlineStar />
											<MdOutlineStar />
										</IconContext.Provider>
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
