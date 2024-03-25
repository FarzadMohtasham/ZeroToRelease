import styles from './Hero.module.scss'
import Button from "../components/Button/Button.tsx";
import {JSX} from 'react'

export default function Hero(): JSX.Element {
    return (
        <section className={`${styles.Hero} responsive-container x-padding-on-mobile`}>
            <h1>Awesome Product, Needs Awesome Coding</h1>
            <p>It's not about ideas. It's about making ideas happen!</p>
            <Button link={'#'} type={'primary'} fullRounded>Get started</Button>
        </section>
    )
}