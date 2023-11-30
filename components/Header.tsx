import NavigationBar from "./NavigationBar.tsx";

export default function Header(){
    return (
        <header>
            <a href="/#" class='brand-logo'></a>
            <NavigationBar />
        </header>
    );
}