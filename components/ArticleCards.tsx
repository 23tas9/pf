import { Head } from "$fresh/runtime.ts";
import { Feed } from "rss/mod.ts";

interface Data {
	title: string;
	feed: Feed;
};

export default function ArticleCards({ title, feed }: Data) {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/styles/css/blog.css" />
			</Head>
			<main>
				<h1 className="center-align">{title}</h1>
				{/*<h1 className="center-align">{feed.title.value}</h1>*/}

				<article className="article-cards grid-container">
					{feed.entries.map(entry => (
						<section className="article-cards__item">
							<a href={`/blog/${entry.links[0].href?.replace(`https://qiita.com/23tas9/items/`, '')}`}>
								<figure className="article-cards__item__attachment">
									{
										<img className="article-cards__item__attachment__image" src={entry.attachments?.at(0)?.url} alt="" />
									}
									<figcaption className="article-cards__item__description">
										<h3 className="article-cards__item__title">{entry.title?.value}</h3>
										<p>{
											entry.updated?.toLocaleString("ja-jp", {
												year: "numeric",
												month: "2-digit",
												day: "2-digit"
											}).replaceAll('/', '-')
										}</p>
										<p>
											{(0 < (entry.author?.name?.length || 0)) ? "執筆者:" : ""}
											{entry.author?.name}
										</p>
										<p>
											{entry.description?.value}
										</p>
									</figcaption>
								</figure>
							</a>
						</section>
					))}
				</article>
			</main>
		</>
	);
}