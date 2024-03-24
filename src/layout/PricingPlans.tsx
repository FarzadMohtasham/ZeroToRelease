import {JSX} from 'react'
import styles from './PricingPlans.module.scss'

export default function PricingPlans(): JSX.Element {
    return (
        <section className={`${styles.pricingPlans} responsive-container x-padding-on-mobile`}>
            <h2>Pricing Plans</h2>
            <p>Fast turnaround. No surprises. Cancel anytime.</p>
        </section>
    )
}