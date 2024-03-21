import {JSX} from 'react'
import styles from './TechStack.module.scss'
import './../assets/styles/responsive-classes.scss'

type techStack = {
    imgSrc: string
    title: string
    desc: string
    label: string
}

const techStacksList: techStack[] = [
    {
        imgSrc: 'react-logo.png',
        title: 'ReactJS',
        desc: 'Awesome and most popular JavaScript library for building user interfaces',
        label: 'DEV'
    },
    {
        imgSrc: 'next-js-logo.png',
        title: 'Next.js',
        desc: 'Want a reliable and awesome apps? We will use Next.JS to make them online!',
        label: 'DEV'
    },
    {
        imgSrc: 'typescript-logo.png',
        title: 'Typescript',
        desc: 'TypeScript is JavaScript, with better tooling at any scale',
        label: 'DEV'
    },
    {
        imgSrc: 'tailwindcss-logo.png',
        title: 'Tailwindcss',
        desc: 'A utility-first CSS framework packed with classes for using with SASS',
        label: 'DEV'
    },
    {
        imgSrc: 'git-logo.png',
        title: 'Git',
        desc: 'version control system designed to handle every small & large projects with speed and efficiency.',
        label: 'DEV'
    },
    {
        imgSrc: 'remix-logo.png',
        title: 'Remix',
        desc: 'Awesome and most popular JavaScript library for building user interfaces',
        label: 'DEV'
    },
    {
        imgSrc: 'docker-logo.png',
        title: 'Docker',
        desc: 'Awesome and most popular JavaScript library for building user interfaces',
        label: 'DEV'
    },
    {
        imgSrc: 'jest-logo.png',
        title: 'Jest',
        desc: 'A utility-first CSS framework packed with classes for using with SASS',
        label: 'DEV'
    },
    {
        imgSrc: 'sass-logo.png',
        title: 'SASS/SCSS',
        desc: 'A utility-first CSS framework pac ked with classes for using with SASS',
        label: 'DEV'
    },
    {
        imgSrc: 'figma-logo.png',
        title: 'Figma',
        desc: 'A utility-first CSS framework packed with classes for using with SASS',
        label: 'UI Design'
    },
]

export default function TechStack(): JSX.Element {
    return (
        <section className={`${styles.techStack} responsive-container`}>
            <h2>Tech Stack</h2>
            <p>We are using most powerful and practical tools and frameworks to implement UI Design and Software's in a
                pixel-perfect way</p>

            <div className={'tech-stacks x-padding-on-mobile'}>
                {
                    techStacksList.map((stack, stackIndex) => {
                        return (
                            <div className={`tech-stack ${stack.title} ${stack.imgSrc.split('-')[0]}`} key={`tech-stack-${stackIndex}`}>
                                <img src={stack.imgSrc} alt=""/>
                                <span className={'stack-title'}>{stack.title}</span>
                                <span className={'stack-desc'}>{stack.desc}</span>
                                <span className={'stack-label'}>{stack.label}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}


