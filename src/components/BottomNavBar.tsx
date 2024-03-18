import styles from './BottomNavBar.module.scss'

export default function BottomNavBar() {
    return (
        <div className={`${styles.bottomNavBar} responsive-container x-padding-on-mobile`}>
            <span className={'title'}>
                Code Project Studio
            </span>

            <div className={'right-col-container'}>
                <span className={'hide-on-mobile'}>
                    You need your projects to be live on internet?
                </span>
                <a href="#">
                    Get started
                </a>
            </div>
        </div>
    )
}