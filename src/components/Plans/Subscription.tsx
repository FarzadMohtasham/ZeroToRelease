import {JSX} from 'react'
import styles from './Subscription.module.scss'
import {SubscriptionPricing} from './../../interface/Subscription.interface.ts'
import seaGreenIcon from '/icons/tick-sea-green.svg'
import heliotropeIcon from '/icons/tick-heliotrope.svg'

interface SubscriptionProps extends SubscriptionPricing {
}

export default function Subscription(props: SubscriptionProps): JSX.Element {
    const colorStyle: { color: string } = {
        color: '',
    }
    let iconSrc: string = ''

    switch (props.color) {
        case 'sea-green':
            colorStyle.color = '#01febd'
            iconSrc = seaGreenIcon
            break
        case 'heliotrope':
            colorStyle.color = '#c25eff'
            iconSrc = heliotropeIcon
            break
    }

    return (
        <div className={`subscription-option ${styles.subscription}`}>
            <div>
                <span style={colorStyle} className={'title'}>{props.title}</span>
            </div>
            <br/>
            <div>
                <span className={'price'}>${props.price.toLocaleString()}</span>
            </div>
            <br/>
            <div>
                <span className={'desc'}>{props.desc}</span>
            </div>
            <br/><br/><br/>
            <ul className={'options-list'}>
                {
                    props.options.map((option: string, index: number): JSX.Element => {
                        return (
                            <li className={'option'}
                                key={option + index}>
                                <img src={iconSrc}
                                     width={15}
                                     height={15}
                                     alt=""/>
                                &nbsp;&nbsp;
                                {option}
                            </li>
                        )
                    })
                }
            </ul>
            <br/>
            <a className={'cta'} href={props.ctaLink}>
                {props.ctaText}
            </a>
        </div>
    )
}








