import styles from './Services.module.scss'
import {JSX} from 'react'

type service = {
    imgSrc: string
    title: string
    desc: string
}

const servicesList: service[] = [
    {
        imgSrc: '\\service-1.png',
        title: 'React.JS Apps',
        desc: 'We realize ideas from simple to complex, everything becomes easy to use.'
    },
    {
        imgSrc: '\\service-2.png',
        title: 'Next.JS Apps',
        desc: 'We realize ideas from simple to complex, everything becomes easy to use.'
    },
    {
        imgSrc: '\\service-3.png',
        title: 'Pixel-Perfect UI Design',
        desc: 'We realize ideas from simple to complex, everything becomes easy to use.'
    }
]

export default function Services(): JSX.Element {
    return (
        <section id={'services'} className={`${styles.services} responsive-container`}>
            <h2>Services</h2>
            <p>We’ve built our company on three pillars of every digital product development. Design, Build, Launch.</p>

            <div className={'service-items'}>
                {
                    servicesList.map((service: service, serviceIndex: number): JSX.Element => {
                        return (
                            <div className={'service-item service-' + (serviceIndex + 1)}>
                                <img src={service.imgSrc} alt=""/>
                                <h6>{ service.title }</h6>
                                <span>{ service.desc }</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}