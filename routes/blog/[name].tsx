import { Handlers, PageProps } from "$fresh/server.ts";

import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";

import BlogArticle from "../../components/BlogArticle.tsx";

import { NavigationMenu } from "../../utils.ts";

interface Data {
	md: string
};

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		const response = await fetch(`https://qiita.com/23tas9/items/${ctx.params.name}.md`);

		const md = await response.text();

		return ctx.render({ md });
	},
};

export default function Home({ data }: PageProps) {
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
			<BlogArticle contentText={data.md} />
			<Footer />
		</div>
	);
}