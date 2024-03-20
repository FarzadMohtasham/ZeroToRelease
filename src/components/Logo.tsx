import styles from './Logo.module.scss'
import {JSX} from 'react'

interface logoProps {
    logoSrc: string,
    logoTitleShow: boolean
}

export default function Logo(props: logoProps): JSX.Element {

    const {logoSrc = 'ZeroToRelease-Logo-White.png ', logoTitleShow = true} = props

    return (
        <div className={styles.Logo}>
            <a href="#">
                <img src={logoSrc} alt=""/>
                {
                    logoTitleShow && <span className={'brand-title'}>ZeroToRelease</span>
                }
            </a>
        </div>
    )
}