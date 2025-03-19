import { Handlers, PageProps } from "$fresh/server.ts";
import { parseFeed, Feed } from "rss/mod.ts";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import ArticleCards from "../components/ArticleCards.tsx";

import { NavigationMenu } from "../utils.ts";

interface Data {
	feed: Feed
};

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {

		const response = await fetch("https://qiita.com/23tas9/feed");
		const xml = await response.text();
		const feed = await parseFeed(xml);

		return ctx.render({ feed });
	},
};

export default function Home({ data }: PageProps<Data>) {
	const feed: Feed = data.feed;

	const menus: NavigationMenu[] = [
		{
			title: "Home",
			href: "/"
		},
		{
			title: "Blog",
			href: "/blog"
		}
	];

	return (
		<div className="wrapper">
			<Header menus={menus} />
			<ArticleCards title="ブログ" feed={feed} />
			<Footer />
		</div>
	);
}