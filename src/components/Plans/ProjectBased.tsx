import {JSX} from 'react'
import styles from './ProjectBased.module.scss'
import {ProjectBased as ProjectBasedProp} from './../../interface/ProjectBased.interface.ts'
import seaGreenIcon from "/icons/tick-sea-green.svg"
import heliotropeIcon from "/icons/tick-heliotrope.svg"
import maizeIcon from '/icons/tick-maize.svg'

export default function ProjectBased(props: ProjectBasedProp): JSX.Element {
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
        case 'maize':
            colorStyle.color = '#f8d044'
            iconSrc = maizeIcon
            break
    }

    return (
        <div className={styles.projectBased}>
            <div className="left-col">
                <span className={'app-type'}
                      style={colorStyle}>{props.appType}</span>
                <span className={'price'}>${props.price.toLocaleString()}+</span>
            </div>
            <div className="right-col">
                <ul className={'options'}>
                    {
                        props.options.map((option, index) => {
                            return (
                                <li className={'option'}
                                    key={option + index}>
                                    <img src={iconSrc}
                                         width={15}
                                         alt=""/>
                                    <span>
                                        {option}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}