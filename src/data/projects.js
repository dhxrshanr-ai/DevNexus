import shopnovaImg from '../assets/projects/shopnova.png';
import preconnectImg from '../assets/projects/preconnect.png';
import gpafyImg from '../assets/projects/gpafy.png';
import projectManagementImg from '../assets/projects/project_management.png';
import devnexusImg from '../assets/projects/devnexus.png';

export const projects = [
    {
        id: 1,
        title: 'Unique-aura (E-Commerce Site)',
        description: 'A full-featured e-commerce platform offering a seamless shopping experience. Includes product browsing, cart management, and secure checkout powered by React.',
        image: shopnovaImg, // E-commerce / POS checkout
        tags: ['Express.js', 'Spring Boot', 'REST API'],
        sourceUrl: "https://github.com/dhxrshanr-ai?tab=repositories",
        liveUrl: "https://unique-aura.vercel.app/",
    },
    {
        id: 2,
        title: 'GPAfy (AU GPA Calculator)',
        description: 'A highly polished and intuitive GPA calculator application. Engineered with a streamlined dashboard to help students accurately track and manage their academic performance.',
        image: gpafyImg, // Newly generated custom GPAfy mockup
        tags: ['React', 'Zustand', 'React Hooks', 'Vite'],
        sourceUrl: "https://github.com/dhxrshanr-ai?tab=repositories",
        liveUrl: "https://gpa-fy.vercel.app/",
    },
    {
        id: 3,
        title: 'Sprinto',
        description: 'A Kanban-style project management app with intuitive drag-and-drop features, user authentication, and task tracking built with Next.js.',
        image: projectManagementImg, // Project planning / Kanban / Agile board
        tags: ['Next.js', 'MongoDB Atlas', 'Docker'],
        sourceUrl: "https://github.com/dhxrshanr-ai?tab=repositories",
        liveUrl: "https://sprintotool.vercel.app/",
    },
    {
        id: 4,
        title: 'Dev Nexus (Portfolio Website)',
        description: 'A modern, dark-themed developer portfolio featuring smooth animations, a fully responsive layout, and optimized performance. The website you are currently viewing.',
        image: devnexusImg, // Clean laptop coding setup
        tags: ['React', 'Tailwind CSS', 'Vite'],
        sourceUrl: "https://github.com/dhxrshanr-ai?tab=repositories",
        liveUrl: "https://devnexus-hub.vercel.app/",
    },
];
