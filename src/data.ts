//importy
import { SiReact, SiJavascript, SiBootstrap, SiGit, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiTypescript, SiTailwindcss } from 'react-icons/si';
import type { IconType } from "react-icons";

//projekty připravé pro stránku
export const projects = [
    {
        title: "Choki kobudo ryu",
        description: "Webové stránky pro klub japonských bojových umění v Ústí nad Labem",
        link: "https://github.com/I3lade02/kobudo-app"
    },
    {
        title: "Vlastní webové stránky v1.0",
        description: "První verze mých webových stránek",
        link: "https://github.com/I3lade02/portfolio"
    },
    {
        title: "Roguelike dungeon",
        description: "Malá roguelike hra vytvořená pomocí Pygame",
        link: "https://github.com/I3lade02/roguelike_dung"
    },
    {
        title: "Catch and Fall",
        description: "Velmi jednoduchá hra s pygame, ve které je cílem chytat padající objekty",
        link: "https://github.com/I3lade02/learning_project"
    }
];

interface Skill {
    name: string;
    icon: IconType;
}

export const usedSkills: Skill[] = [
    { name: "React", icon: SiReact },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Git", icon: SiGit },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
];

export const learningSkills: Skill[] = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwindcss", icon: SiTailwindcss }
];