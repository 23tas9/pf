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
			href: "https://gamelib.9lab.me/EggTower",
			src: "/image/works/eggtower.webp",
		},
		{
			title: "Siv3D x Bullet",
			href: 'https://github.com/23tas9/OpenSiv3DBulletPhysics/tree/main',
			src: "/image/works/siv3dxbulletphysics.webp",
		},
		{
			title: "バンダイナムコスタジオ杯 | Siv3D ゲームジャム 2023",
			href: 'https://github.com/23tas9/bnscup2023/tree/1.0',
			src: "https://raw.githubusercontent.com/23tas9/bnscup2023/master/gameplay.png",
		},
		{
			title: "自作音ゲー！「ChronoBeat」",
			href: "https://github.com/23tas9/ChronoBeat",
			src: "https://raw.githubusercontent.com/23tas9/ChronoBeat/refs/heads/master/ChronoBeat/App/resource/images/title.png"
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
