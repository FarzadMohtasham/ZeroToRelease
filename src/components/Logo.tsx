import styles from './Logo.module.scss'

export default function Logo(props: { logoSrc?: string | undefined; logoTitleShow?: boolean | undefined }) {

    const {logoSrc = 'ZeroToRelease-Logo-White.png ', logoTitleShow = true} = props

    return (
        <div className={styles.Logo}>
            <img src={logoSrc} alt=""/>
            {
                logoTitleShow && <span className={'brand-title'}>ZeroToRelease</span>
            }
        </div>
    )
}