import {JSX} from 'react'
import styles from './PlansCTA.module.scss'

enum ContentData {
    Title = 'Let’s talk about your product',
    Desc = 'Learn more about how we work and how it can help you.',
    CtaText = 'Book a call',
    CtaLink = '#'
}

export default function PlansCTA(): JSX.Element {
    return (
        <div className={`${styles.plansCTA}`}>
            <span className={'title'}>{ContentData.Title}</span>
            <span className={'desc'}>{ContentData.Desc}</span>
            <a href={ContentData.CtaLink}
               className={'cta'}>
                {ContentData.CtaText}
            </a>
        </div>
    )
}