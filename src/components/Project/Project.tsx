import styles from './Project.module.scss'
import {JSX} from 'react'
import {ProjectProps} from '../../interface/ProjectProps.interface.ts'
import Star from "../Star.tsx";

export default function Project(props: ProjectProps): JSX.Element {

    // const {
    //     title = 'Undefined title',
    //     desc = 'Undefined desc',
    //     label = 'Undefined label',
    //     imgSrc = 'Undefined imgSrc',
    //     logoSrc = 'Undefined logoSrc',
    //     numberOfStars = 0,
    // }: projectProps = props

    return (
        <div className={`project ${styles.projectContainer} project-${props.index}`}>
            <img className={'bg-img'} src={props.imgSrc} alt=""/>
                <img className={'logo-img'} src={props.logoSrc} alt=""/>
            <span className="title">{props.title}</span>
            <span className="desc">{props.desc}</span>

            <div className="label-wrapper">
                {
                    Array.from({length: Number(props.numberOfStars)}).map((_) => {
                        return (
                            <div>
                                <Star type={'gold'} width={'10rem'}/>
                            </div>
                        )
                    })
                }
                <span>{props.label}</span>
            </div>
        </div>
    )
}












