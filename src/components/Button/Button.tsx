import styles from './Button.module.scss'
import {JSX} from "react";

type btnTypes = 'primary' | 'secondary'
type btnSizeTypes = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface ButtonProps {
    children: string,
    link?: string | null,
    type?: btnTypes,
    size?: btnSizeTypes,
    hideBg?: boolean,
    rounded?: boolean,
    fullRounded?: boolean,
    borderLess?: boolean,
}

export default function Button(props: ButtonProps): JSX.Element {

    const {
        children = 'Not defined',
        link = null,
        type = 'primary',
        size = 'md',
        hideBg = false,
        rounded = false,
        fullRounded = false,
        borderLess = true
    } = props

    const btnClasses =
        `${styles['button']} ` +
        `${type && styles[type]} ` +
        `${hideBg && styles['hideBg']} ` +
        `${styles['size' + size.toUpperCase()]} ` +
        `${rounded && styles['rounded']} ` +
        `${fullRounded && styles['fullRounded']} ` +
        `${borderLess && styles['borderLess']} `

    return (
        // @ts-expect-error Unknown error, Fix later
        <a href={link}>
            <button className={btnClasses}>
                {children}
            </button>
        </a>
    )
}












