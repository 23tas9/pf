import { NavigationMenu } from "../utils.ts";

import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx";

import Carousel from "../islands/Carousel.tsx";

import About from "../components/About.tsx";
import Works from "../components/Works.tsx";

export default function Index() {
	const menus: NavigationMenu[] = [
		{
			title: "Home",
			href: "/#"
		},
		{
			title: "About",
			href: "/#about"
		},
		{
			title: "Works",
			href: "/#works"
		}
	];

	return (
		<div class="wrapper">
			<Header menus={menus} />
			<main>
				<h1>Welcome to 9lab.</h1>
				<Carousel />
				<About />
				<Works />
			</main>
			<Footer />
		</div>
	);
}
