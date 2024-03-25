import styles from './NavBar.module.scss'
import Logo from "../components/Logo.tsx";
import navItemsData from "../data/navItems.data.ts";
import {JSX} from 'react'
import scrollTo from "../utils/scrollTo.tsx";

const bookACallLink: string = '#'

export default function NavBar(): JSX.Element {
    return (
        <nav className={`${styles.NavBar} responsive-container`}>
            <Logo/>

            <div className={'nav-items hide-on-mobile hide-on-tablet'}>
                <ul>
                    {
                        navItemsData.map((item, index) => {
                            return (
                                <li className={'nav-item'} key={item.name + index}>
                                    <a onClick={() => scrollTo(item.link)}>
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
