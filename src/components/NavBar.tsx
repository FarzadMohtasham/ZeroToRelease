import styles from './NavBar.module.scss'
import Logo from "./Logo.tsx";
import navItems from "../data/nav-items.ts";

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

            <a href={bookACallLink}>
                <button className={'book-a-call-btn'}>
                    Book a Call
                </button>
            </a>
        </nav>
    )
}
