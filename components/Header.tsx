import { NavigationMenu } from "../utils.ts";

interface Data {
	menus: NavigationMenu[]
}

export default function Header({ menus }: Data) {
	return (
		<header>
			<a href="/#" class='brand-logo' aria-label="トップページに戻る"></a>

			<nav class="global-nav">
				<ul>
					{menus.map((item) => (
						<li>
							<a href={item.href}>{item.title}</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}