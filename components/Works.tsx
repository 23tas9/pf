import ExternalLink from "./ExternalLink.tsx";

export default function Works() {
	return (
		<div className="about content" id="works">
			<h2>Works</h2>

			<article>
				<h3>バンダイナムコスタジオ杯 | Siv3D ゲームジャム 2023</h3>
				<section>
					<p>
						バンダイナムコスタジオ杯 | Siv3D ゲームジャム
						2023へ個人で参加しました。<br />
						<br />
						お題は「すくう」<br />
						<br />
						で、宇宙をさまようロケットが、ちりばめられたガラクタを「すくう」ゲームを作りました。<br />
						ゲーム制作の難しさとUnityなどゲームエンジンのありがたみを感じました。<br />
						<br />
						<ExternalLink
							href="https://github.com/tas9n/bnscup2023/tree/1.0"
							text="GitHubリポジトリ"
						/>
						<a
							href="https://github.com/tas9n/bnscup2023/tree/1.0"
							target="_blank"
						>
							<img
								src="/image/works/bnscup2023.png"
								alt="バンダイナムコスタジオ杯 | Siv3D ゲームジャム 2023"
							/>
						</a>
					</p>
				</section>
			</article>

			{
				//<ExternalLink href="/" text="その他実績など詳しくはこちら" />
			}
		</div>
	);
}
