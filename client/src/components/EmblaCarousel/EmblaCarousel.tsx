import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./embla.css";
import Image from "next/image";

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
								src={`https://random.imagecdn.app/500/150`}
								alt=""
								width={500}
								height={500}
							/>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
								vehicula, nisl nec posuere fermentum, neque felis scelerisque
								erat, ac condimentum ligula nunc sit amet arcu. Duis euismod
								eros vitae purus laoreet, et vehicula justo placerat. Nulla
								facilisi. Nullam nec eros nec lectus tincidunt ultricies.
								Suspendisse potenti. Sed in nunc at mi mollis lacinia. Nulla
								facilisi. Nullam nec eros nec lectus tincidunt ultricies.
								Suspendisse potenti. Sed in nunc at mi mollis lacinia.
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
