import { Head } from "$fresh/runtime.ts";
import { render, CSS } from "@deno/gfm";

// syntax highlight from https://unpkg.com/browse/prismjs@1.29.0/components/

import "https://esm.sh/prismjs@1.29.0/components/prism-c?no-check";
import "https://esm.sh/prismjs@1.29.0/components/prism-cpp?no-check";
import "https://esm.sh/prismjs@1.29.0/components/prism-python?no-check";

import { Meta, MDParser } from "../tools/MDParser.ts";

interface Data {
	contentText: string
};

function RenderBlog(body: string, meta: Meta, topics: string[]) {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css" />
				<style>
					{CSS}
				</style>
			</Head>
			<main>
				<h1>{meta.title}</h1>

				<article data-color-mode="light" data-light-theme="light" data-dark-theme="dark" class="markdown-body content"
					dangerouslySetInnerHTML={{ __html: body }}>

				</article>

				<a href={`/blog`}>ブログ一覧に戻る</a>
			</main>
		</>
	)
}

export default function BlogArticle({ contentText }: Data) {
	const md = MDParser(contentText);
	const body = render(md.body);

	if (0 < body.length) return RenderBlog(body, md.meta, md.topics);


	return (
		<>
			<Head>
				<title>404 - Page not found</title>
			</Head>
			<main>
				<div className="hero">
					<h1 className="hero__title">404 - Page not found</h1>
					<p className="hero__description">
						お探しのブログは見つかりませんでした。
					</p>
					<a href={`/blog`}>ブログ一覧に戻る</a>
				</div>
			</main>
		</>
	);
}