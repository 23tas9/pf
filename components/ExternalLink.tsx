import IconLink from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/link.tsx"
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx"

interface Prop{
    href: string,
    text: string
};

export default function ExternalLink({href, text}: Prop){
    return (
        <a href={href} class="external-link" target="_blank">
            {
                (href.startsWith("https://github.com/")) ?
                    <IconBrandGithub class="external-link__icon" /> :
                (href.startsWith("https:/x.com/")) ?
                    <IconBrandX class="external-link__icon" />:
                <IconLink class="external-link__icon" />   
            }
            {text}
        </a>
    )
}