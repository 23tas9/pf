import { Handlers, PageProps } from "$fresh/server.ts";

import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

import { NavigationMenu } from "../utils.ts";

interface Data {
	items: any;
};

export const handler: Handlers<Data> = {
	async GET(_req, ctx) {
		{
			const headers = {
				Authorization: "Bearer " + Deno.env.get("QIITA_API_KEY")
			};

			const response = await fetch(`https://qiita.com/api/v2/users/23tas9/items`, {
				headers: headers
			});

			const json = await response.json();

			for(const item of json){
				console.log(item.title);
			}

			console.log(json[0]);

			const item = json[0];
			item.created_at;
			item.id;
			item.tags;
			item.title;
			item.user.name;

			return ctx.render({ items: json });
		}

		const response = await fetch("https://qiita.com/23tas9/feed");
		const xml = await response.text();
		const feed = await parseFeed(xml);

		return ctx.render({ feed });
	},
};

export default function Home({ data }: PageProps<Data>) {
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
				<article className="article-cards grid-container">
				{data.items.map(item=>(
					<section className="article-cards__item">
						<a href={`/blog/${item.id}`}>
							<h3 className="article-cards__item__title">{item.title}</h3>
							<p>投稿日: {
								new Date(item.created_at).toLocaleString("ja-jp", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit"
								}).replaceAll('/', '-')
							}</p>
							<p>最終更新日: {
								new Date(item.updated_at).toLocaleString("ja-jp", {
									year: "numeric",
									month: "2-digit",
									day: "2-digit"
								}).replaceAll('/', '-')
							}</p>
							<p>
								執筆者:
								{item.user.name}
							</p>
						</a>
					</section>
				))}
				</article>
			<Footer />
		</div>
	);
}