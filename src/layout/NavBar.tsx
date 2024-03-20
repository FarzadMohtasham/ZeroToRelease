import styles from './NavBar.module.scss'
import Logo from "../components/Logo.tsx";
import navItems from "../data/navItems.ts";

const bookACallLink: string = '#'

export default function NavBar() {
    return (
        <nav className={`${styles.NavBar} responsive-container`}>
            <Logo/>

            <div className={'nav-items hide-on-mobile hide-on-tablet'}>
                <ul>
                    {
                        navItems.map((item, index) => {
                            return (
                                <li className={'nav-item'} key={item.name + index}>
                                    <a href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <a className={'hide-on-mobile hide-on-tablet'} href={bookACallLink}>
                <button className={'book-a-call-btn'}>
                    Book a Call
                </button>
            </a>

            <div className={'hamburger-button-container hide-on-desktop'}>
                <img className={'hamburger-button'}
                     src="/icons/hamburger-menu-button.svg"
                     alt="hamburger menu button"/>
            </div>
        </nav>
    )
}
