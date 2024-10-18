import { JSX } from "preact";

import ExternalLink from "./ExternalLink.tsx";

enum AttachmentType {
	externalLink = "ex-link",
	image = "image"
};

interface WorkDataAttachment {
	type: AttachmentType;
	title: string;
	href: string;
	src?: string;
};

interface WorkDataType {
	title: string;
	content: JSX.Element;
	attachments?: WorkDataAttachment[];
}

const WorkDatas: WorkDataType[] = [
	{
		title: "バンダイナムコスタジオ杯 | Siv3D ゲームジャム 2023",
		content: (
			<p>
				バンダイナムコスタジオ杯 | Siv3D ゲームジャム
				2023へ個人で参加しました。<br />
				<br />
				お題は「すくう」<br />
				<br />
				で、宇宙をさまようロケットが、ちりばめられたガラクタを「すくう」ゲームを作りました。<br />
				ゲーム制作の難しさとUnityなどゲームエンジンのありがたみを感じました。
			</p>
		),
		attachments: [
			{
				type: AttachmentType.externalLink,
				title: "GitHubリポジトリ",
				href: "https://github.com/23tas9/bnscup2023/tree/1.0"
			},
			{
				type: AttachmentType.image,
				title: "バンダイナムコスタジオ杯 | Siv3D ゲームジャム 2023",
				href: "https://github.com/23tas9/bnscup2023/tree/1.0",
				src: "/image/works/bnscup2023.webp"
			}
		]
	},
	{
		title: "所属サークル(OECUPC)のWebサイト制作(開発中)",
		content: (
			<p>
				わたしの所属しているサークルのWebサイトをリニューアルしました。<br />
				当サイト制作で使用したDenoのWebフレームワーク、<ExternalLink text="Fresh" href="https://fresh.deno.dev/" />を用いました。<br />
				FreshはDeno Deployで使え、無料で公開することができます。
			</p>
		),
		attachments: [
			{
				type: AttachmentType.image,
				title: "OECUPC Webサイト",
				href: "https://opcofficial.deno.dev/",
				src: "/image/works/oecupc-logo.webp"
			}
		]
	},
	{
		title: "WEB上で遊べるゲームサイト",
		content: (
			<p>
				私が制作したゲームをWEB上に公開たサイトを制作しました！<br />
				<ExternalLink text="こちら" href="https://gamelib.9lab.me/" />から遊べます！
			</p>
		)
	}
]

export default function Works() {
	return (
		<article className="content" id="works">
			<h2>Works</h2>
			{WorkDatas.map(data => (
				<section>
					<h3>{data.title}</h3>
					<section>
						{data.content}
						{data.attachments?.map(attachment => (
							(attachment.type === AttachmentType.externalLink) ? <ExternalLink text={attachment.title} href={attachment.href} /> :
								<a href={attachment.href} target="_blank">
									<img src={attachment.src} alt={attachment.title} />
								</a>
						))}
					</section>
				</section>
			))}
			<a href="/blog">ブログはこちら</a>
		</article>
	);
}
