export default function NavigationBar(){
    const menus = [
        {
            'name': 'About',
            'href': '#about'
        },
        {
            'name': 'Works',
            'href': '#works'
        },
        {
            'name': 'Blog',
            'href': '/'
        },
        {
            'name': 'Contact',
            'href': '#contact'
        }
    ];

    return (
        <nav class='global-nav'>
            <a href="/" class='brand-logo'></a>
            <ul>
                {menus.map(item=>(
                    <li>
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}