import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";

interface SlideItem {
	title: string;
	src: string;
	href: string;
}

interface CarouselProp {
	items: SlideItem[];
	autoSlide: boolean;
}

export const Carousel = (prop: CarouselProp) => {
	const currentSlide = useSignal(0);
	const intervalRef = useRef<number | null>(null); // interval を useRef で管理

	const getMovedIndex = (index: number, move: number) => {
		const last = prop.items.length;

		index += move;

		if (index < 0) index += last;
		if (last <= index) index -= last;

		return index;
	};

	const resetInterval = () => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = setInterval(() => {
			currentSlide.value = getMovedIndex(currentSlide.value, 1);
		}, 5000);
	};

	const flipSlide = (num: number) => {
		currentSlide.value = getMovedIndex(currentSlide.value, num);
		resetInterval();
	};

	if (prop.autoSlide) {
		useEffect(() => {
			resetInterval();

			return () => {
				if (intervalRef.current !== null) {
					clearInterval(intervalRef.current);
				}
			};
		}, []);
	}

	return (
		<>
			<Head>
				<link rel="stylesheet" href="/styles/css/carousel.css" />
			</Head>
			<div className="carousel">
				{/* slide */}
				{prop.items.map((item, index) => {
					let transition = "";
					if (index == currentSlide.value) {
						transition = "carousel__item-current";
					}
					if (
						getMovedIndex(index, 1) == currentSlide.value
					) transition = "carousel__item-next";
					if (
						getMovedIndex(index, -1) == currentSlide.value
					) transition = "carousel__item-prev";

					return (
						<a href={item.href} target="_blank">
							<figure className={`carousel__item ${transition}`}>
								<img
									className="carousel__item__image"
									src={item.src}
								/>
								<figcaption className="carousel__item__caption">
									{item.title}
								</figcaption>
							</figure>
						</a>
					);
				})}
				<ul className="carousel-index">
					{prop.items.map((_, index) => (
						<li
							className={`carousel-index__item ${(index == currentSlide.value)
								? "carousel-index__item--current"
								: ""
								}`}
						>
							⚫︎
						</li>
					))}
				</ul>
				<button
					className="carousel-button carousel-button--left"
					onClick={() => flipSlide(-1)}
				>
					＜
				</button>
				<button
					className="carousel-button carousel-button--right"
					onClick={() => flipSlide(1)}
				>
					＞
				</button>
			</div>
		</>
	);
};
