import {JSX} from 'react'
import styles from './Projects.module.scss'
import Project from "../components/Project/Project.tsx";
import ProjectsList from "../data/projectsList.data.ts";
import {ProjectProps} from "../interface/ProjectProps.interface.ts";

export default function Projects(): JSX.Element {
    return (
        <section className={`${styles.projects} responsive-container x-padding-on-mobile`}>
            <h2>What we have done?</h2>
            <p>Oh, I want to introduce you some of our best projects to you that are online now, and completely
                open-source, Check my github</p>

            <div className={'projects-list'}>
                {
                    ProjectsList.map((project: ProjectProps, index: number): JSX.Element => {
                        return (
                            <Project title={project.title}
                                     desc={project.desc}
                                     logoSrc={project.logoSrc}
                                     imgSrc={project.imgSrc}
                                     label={project.label}
                                     numberOfStars={project.numberOfStars}
                                     key={'project-' + index}
                                     index={project.index}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}
















