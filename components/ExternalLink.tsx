import IconLink from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/link.tsx"

interface Prop{
    href: string,
    text: string
};

export default function ExternalLink({href, text}: Prop){
    return (
        <a href={href}>
            <IconLink class="w-6 h-6 inline-block" />{text}
        </a>
    )
}