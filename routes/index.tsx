import Carousel from "../islands/Carousel.tsx";

import About from "../components/About.tsx";
import Works from "../components/Works.tsx";

export default function Index() {
	return (
		<main>
			<h1>Welcome to 9lab.</h1>
			<Carousel />
			<About />
			<Works />
		</main>
	);
}
