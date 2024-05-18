import IconLink from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/link.tsx";

import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";
import IconBrandX from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-x.tsx"

import { JSX } from "preact/jsx-runtime";

interface Prop {
	href: string;
	text: string;
};

const IconMap: { [x: string]: (props: { size?: number; color?: string; stroke?: number }) => JSX.Element } = {
	"https://github.com/": IconBrandGithub,
	"https://x.com": IconBrandX
};

export default function ExternalLink({ href, text }: Prop) {
	let currentKey = "";
	let IconComponent = IconLink;

	if (Object.keys(IconMap).find(key => {
		currentKey = key;
		return href.startsWith(key)
	})) IconComponent = IconMap[currentKey];

	return (
		<a href={href} className="external-link" target="_blank">
			<IconComponent className="external-link__icon" />
			{text}
		</a>
	)
}
