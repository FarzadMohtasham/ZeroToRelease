import styles from './Star.module.scss'
import {JSX} from 'react'
import {StarProps} from './../interface/StarProps.interface.ts'

export default function Star(props: StarProps): JSX.Element {

    const {type = 'gold', width = '1rem'}: StarProps = props

    return (
        <div className={styles.starContainer}>
            {
                type === 'gold' && <img className={'star-icon'}
                                        src="\icons\gold-star.svg"
                                        width={width}
                                        alt=""/>
            }
        </div>
    )
}