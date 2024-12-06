import { NavigationMenu } from "../utils.ts";

import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx";

import { Carousel } from "../islands/Carousel.tsx";

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
		},
		{
			title: "Blog",
			href: "/blog"
		}
	];

	const SLIDE_DATA = [
		{
			title: "Egg Tower",
			href: 'https://tas9n.github.io/EggTower/game',
			src: "/image/works/eggtower.webp",
		},
		{
			title: "Siv3D x Bullet",
			href: 'https://github.com/tas9n/OpenSiv3DBulletPhysics/tree/main',
			src: "/image/works/siv3dxbulletphysics.webp",
		},
		{
			title: "バンダイナムコスタジオ杯 | Siv3D ゲームジャム 2023",
			href: 'https://github.com/tas9n/bnscup2023/tree/1.0',
			src: "https://raw.githubusercontent.com/tas9n/bnscup2023/master/gameplay.png",
		}
	];

	return (
		<div class="wrapper">
			<Header menus={menus} />
			<main>
				<h1>Welcome to 9lab.</h1>
				<Carousel items={SLIDE_DATA} autoSlide={true} />
				<About />
				<Works />
			</main>
			<Footer />
		</div>
	);
}
