import ExternalLink from "./ExternalLink.tsx";

export default function About() {
	const GetMyAge = () => {
		const today = new Date();

		const thisYearMyBirthday = new Date(today.getFullYear(),
			12 - 1,
			29
		);

		const age = today.getFullYear() - 2003 - (today < thisYearMyBirthday ? 1 : 0);

		return age;
	};

	const AboutMe = [
		{
			display: "名前",
			value: "たすくん"
		},
		{
			display: "年齢",
			value: GetMyAge()
		},
		{
			display: "所属",
			value: "大阪電気通信大学 総合情報学部 デジタルゲーム学科(OECUプログラミングサークル)"
		},
		{
			display: "GitHub",
			value: "tas9n",
			link: "https://github.com/23tas9"
		}
	];

	const Skills = [
		{
			display: "C++",
			image: "/image/logo/cpp.webp",
			since: 2020,
			about: "OpenSiv3Dを用いた2Dゲーム開発、アプリ開発など"
		},
		{
			display: "Java Script",
			image: "/image/logo/js.webp",
			since: 2019,
			about: "当サイト制作など"
		},
		{
			display: "OpenSiv3D",
			image: "/image/logo/siv3d.webp",
			since: 2021,
			about: "ゲーム制作やコミッタとしての活動"
		},
		{
			display: "Unity",
			image: "/image/logo/unity.webp",
			since: 2022,
			about: "授業内でのゲーム制作"
		}
	]

	return (
		<div className="about content" id="about">
			<h2>About</h2>
			<div className="table-scroll-lapper">
				<table className="about-table">
					<thead>
						<tr>
							<th colSpan={2}>私について</th>
						</tr>
					</thead>
					<tbody>
						{AboutMe.map((item) => (
							<tr>
								<td>{item.display}</td>
								<td>{
									item.link
										? <ExternalLink href={item.link} text={item.value} />
										: item.value
								}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="table-scroll-lapper">
				<table className="about-table">
					<thead>
						<tr>
							<th></th>
							<th>スキル</th>
							<th>経験年数</th>
							<th>活動など</th>
						</tr>
					</thead>
					<tbody>
						{Skills.map((item) => (
							<tr>
								<td className="about-table__skill-icon"><img src={item.image} alt={`${item.display}のアイコン`} /></td>
								<td>{item.display}</td>
								<td className="about-table__skill-experience">{new Date().getFullYear() - item.since}年</td>
								<td>{item.about}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}