export default function NavigationBar(){
    const menus = [
        {
            'name': 'About',
            'href': '/#about'
        },
        {
            'name': 'Works',
            'href': '/#works'
        },
        {
            'name': 'Blog',
            'href': '/'
        }
    ];

    return (
        <nav class='global-nav'>
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