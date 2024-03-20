import styles from './Hero.module.scss'
import Button from "../components/Button/Button.tsx";

export default function Hero() {
    return (
        <section className={`${styles.Hero} responsive-container`}>
            <h1>
                Awesome Product, Need Awesome Coding
            </h1>

            <p>
                It's not about ideas. It's about making ideas happen!
            </p>

            <Button link={'#'} type={'primary'} fullRounded>Get started</Button>
        </section>
    )
}