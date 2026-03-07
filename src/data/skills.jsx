import { FaServer } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";

export const skills = [
    {
        name: 'React',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" width="36" height="36" />,
        category: 'Frontend'
    },
    {
        name: 'JavaScript',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" width="36" height="36" />,
        category: 'Language'
    },
    {
        name: 'TypeScript',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="36" height="36" />,
        category: 'Language'
    },
    {
        name: 'HTML5',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" width="36" height="36" />,
        category: 'Frontend'
    },
    {
        name: 'CSS3',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" width="36" height="36" />,
        category: 'Frontend'
    },
    {
        name: 'Tailwind CSS',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" width="36" height="36" />,
        category: 'Frontend'
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs size={36} color="var(--text-primary)" />,
        category: 'Framework'
    },
    {
        name: 'Node.js',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" width="36" height="36" />,
        category: 'Backend'
    },
    {
        name: 'MongoDB',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" width="36" height="36" />,
        category: 'Database'
    },
    {
        name: 'Git & GitHub',
        icon: (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" width="28" height="28" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" width="28" height="28" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
        ),
        category: 'Tools'
    },
    {
        name: 'REST APIs',
        icon: <FaServer size={34} color="#009688" />,
        category: 'Backend'
    },
    {
        name: 'Figma',
        icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" width="36" height="36" />,
        category: 'Design'
    },
];
