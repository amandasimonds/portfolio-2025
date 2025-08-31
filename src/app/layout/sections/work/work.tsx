import Card from "@/app/components/card/card";
import styles from "./work.module.scss";
import React from "react";

const projects = [
    {
        title: "Mower Masters LLC",
        link: "https://mowermastersllc.com",
        img: "mower-masters-llc.png",
        description: "React website for a local lawn care business. Designed in Figma and built lightning fast, with SEO to help the business get up and running quickly. After the website went live, Mower Masters was immediately getting calls.",
         icons: [
            { icon: "code_blocks", link: "https://react.dev/" },
            { icon: "scss", link: "https://sass-lang.com/" },
            { icon: "figma", link: "https://figma.com/" }
        ]
    },
    {
        title: "Data Platform Prototype",
        link: "https://data-platform-prototype.netlify.app",
        img: "data-platform-prototype.png",
        description: "Angular high fidelity prototype of a data platform application. I built this prototype for user testing, design feedback, and to be used by product owners to showcase the app workflow. This project marks a turning point in my development as a UIUX Designer/Developer, and the value I bring to design/development teams."
    },
    {
        title: "Climbventures",
        link: "https://climbventures.netlify.app",
        img: "climbventures.png",
        description: "React website concept for booking for rock climbing expeditions. I was inspired to create an earthy color scheme that aligned with my interest in nature and rock climbing."
    },
    {
        title: "Wedding Website",
        link: "https://amanda-and-ben.netlify.app/",
        img: "wedding-website.png",
        description: "My husband and I's wedding website. I designed the website in Figma, made the logo from scratch, and built the website with React. I experimented with CSS animations and transitions to make the site feel more dynamic, and used SEO to make it online searchable for our guests."
    },
    {
        title: "Aurora Component Library",
        link: "https://aurora-component-library.netlify.app",
        img: "aurora-lib.png",
        description: "Angular component library, displayed through Storybook. I used Figma in combination with design tokens and Style Dictionary to create the design system. This is the start of a passion project to learn more about design systems, component libraries, and Storybook."
    },
    {
        title: "Genetic Username",
        link: "https://genetic-username.netlify.app",
        img: "genetic-username.png",
        description: "Username Generator inspired by Reddit, and my desire to do a fun day project building a vanilla JavaScript app."
    },
];

export default function Work() {

    return (
        <div className={styles.work} id="work">
            <h2 className={styles.work__header}>Work</h2>
            <div className={styles.work__content}>
                {projects.map((project, idx) => (
                    <Card key={idx} className={styles.work__card} image={project.img} imageAlt={project.title}>
                        <h4><a href={project.link}>{project.title} <i className="material-icons">open_in_new</i></a></h4>
                        <p>{project.description}</p>
                        <div className="links">
                            <i className="material-icons"></i>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}