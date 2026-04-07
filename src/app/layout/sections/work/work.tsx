import Card from "@/app/components/card/card";
import styles from "./work.module.scss";
import React from "react";
import Branch from "@/app/components/branch/branch";

const projects = [
    {
        title: "SuperMetric",
        link: "https://supermetric.netlify.app/",
        img: "/supermetric.png",
        description: "Working with an educational research leader, and a backend engineer, I led the UXUI design and development of a research collection portal for The Superindentendent Lab. This link will take you to the frontend only demo site that we presented to funders. The full-stack production version is being launched in May 2026.",
        skills: [
            "React",
            "TypeScript",
            "Sass",
            "Figma",
        ],
        icons: [
            { type: "github", link: "https://github.com/amandasimonds/supermetric" },
            { type: "figma", link: "https://www.figma.com/design/MKEg0zR3LchALHHWexUo6y/SuperMetric?node-id=18-420&t=fFK25NoVSn63FbYZ-1" },
        ]
    },
    {
        title: "Mower Masters LLC",
        link: "https://mowermastersllc.com",
        img: "/mower-masters-llc.png",
        description: "React website for a local lawn care business. Designed in Figma and built lightning fast, with SEO to help the business get up and running quickly. After the website went live, Mower Masters was immediately getting calls.",
        skills: [
            "React",
            "TypeScript",
            "Sass",
            "Figma",
            "SEO"
        ],
        icons: [
            { type: "github", link: "https://github.com/amandasimonds/mower-masters-llc" },
            { type: "figma", link: "https://www.figma.com/design/AGoKLnB9sWBXLblAncbbdj/Mower-Masters?node-id=2-69&t=bhKz7tQkASANPMtQ-1" },
        ]
    },
    {
        title: "Data Platform Prototype",
        link: "https://data-platform-prototype.netlify.app",
        img: "/data-platform-prototype.png",
        description: "Angular high fidelity prototype of a data platform application. I built this prototype for user testing, design feedback, and to be used by product owners to showcase the app workflow. This project marks a turning point in my development as a UIUX Designer/Developer, and the value I bring to design/development teams.",
        skills: [
            "Angular",
            "TypeScript",
            "Sass",
        ],
        icons: [
            { type: "github", link: "https://github.com/amandasimonds/data-platform-prototype-1" },
        ]
    },
    {
        title: "Climbventures",
        link: "https://climbventures.netlify.app",
        img: "/climbventures.png",
        description: "React website concept for booking rock climbing expeditions. I was inspired to create an earthy color scheme that aligned with my interest in nature and rock climbing.",
        skills: [
            "React",
            "Sass",
        ],
        icons: [
            { type: "github", link: "https://github.com/amandasimonds/climbventures" },
        ]
    },
    {
        title: "Wedding Website",
        link: "https://amanda-and-ben.netlify.app/",
        img: "/wedding-website.png",
        description: "I designed our wedding website in Figma, made the logo from scratch, and built the website with React. I experimented with CSS animations and transitions to make the site feel more dynamic, and used SEO to make it online searchable for our guests.",
        skills: [
            "React",
            "Sass",
            "TailwindCSS",
            "Figma",
            "SEO"
        ],
        icons: [
            { type: "github", link: "https://github.com/amandasimonds/brannocks-at-the-disco" },
            { type: "figma", link: "https://www.figma.com/design/lP3hSN5sXia8Tgk3i0HCQd/Wedding-Website?node-id=0-1&t=VZgCEL5fN2DJYqQG-1" },
        ]
    },
    {
        title: "Aurora Component Library",
        link: "https://aurora-ui-kit.netlify.app/",
        img: "/aurora-lib.png",
        description: "Angular component library, displayed through Storybook. I used Figma in combination with design tokens and Style Dictionary to create the design system. This is the start of a passion project to learn more about design systems, component libraries, and Storybook.",
        skills: [
            "Angular",
            "TypeScript",
            "Storybook",
            "Sass",
            "Figma",
        ],
        icons: [
            { type: "github", link: "https://github.com/amandasimonds/aurora-component-library" },
            { type: "figma", link: "https://www.figma.com/design/ZabTcaDSrmzP7WdV7xgn8s/Aurora?node-id=63-149&t=R1uRwm1TmoZiEgoW-1" },
        ]
    }
];

export default function Work() {

    return (
        <div className={styles.work} id="work">
            <Branch style={{ left: "16px", top: "-200px" }} />
            <Branch style={{ right: "16px", top: "200px" }} imageStyles={{ transform: "scaleX(-1)" }} />

            <div className="content-layer">
                <h2 className={styles.work__header}>Work</h2>
                <div className={styles.work__content}>

                    {projects.map((project, idx) => (

                        <Card key={idx} className={styles.work__card} image={project.img} imageAlt={project.title}>
                            <div className={styles.work__card__content}>

                                <div>
                                    <h4><a href={project.link} target="_blank">{project.title} <i className="material-icons">open_in_new</i></a></h4>
                                    <p>{project.description}</p>
                                </div>

                                <div className={styles.work__card__footer}>
                                     <div className={styles.work__skills}>
                                        {project.skills.map((skill, idx) => (
                                            <span key={idx} className="chip">{skill}</span>
                                        ))}
                                    </div>

                                    <div className={styles.work__icons}>
                                        {project.icons.map((icon, idx) => (
                                            <a key={idx} href={icon.link} className={`${styles.work__icon} link`} target="_blank">
                                                {icon.type === 'github' ? <i className="fa-brands fa-github"></i> : null}
                                                {icon.type === 'figma' ? <i className="fa-brands fa-figma"></i> : null}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}