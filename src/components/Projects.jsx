import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const ProjectCard = ({ imgSrc, title, description, linkgithub ,linklive}) => {
    return (
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
            <img src={imgSrc} alt={title} className="w-full h-56 object-cover" />
            <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
            </div>
            <div className="flex justify-evenly h-12 bg-green-400 text-white font-bold items-center transition duration-300 text-2xl">
                <a href={linkgithub} target="_blank" className="hover:text-gray-300" aria-label="GitHub Link">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={linklive} target="_blank" className="hover:text-gray-300" aria-label="Live Project Link">
                    <FontAwesomeIcon icon={faGlobe} />
                </a>
            </div>
        </div>
    );
};



// Import the image
let okImage="GameDevlopments.png";

const Projects = () => {
    const projectData = [
        {
            imgSrc:"Mealminder.png" ,
            title: 'Canteen Management System (LAMP Stack)',
            description: 'Developed a web-based canteen management system using the LAMP stack, implementing CRUD operations and user authentication.',
            linkgithub: 'https://github.com/lakhman108/Canteen.git',
            linklive:''
        },
        {
            imgSrc: "Mealminder.png",
            title: 'Improved CMS (Python Django)',
            description: 'Enhanced canteen management system with dynamic data fetching and Django authentication. Integrated Razorpay for payment processing and DjangoRest for API development.',
            linkgithub: 'https://github.com/lakhman108/hw_1',
            linklive: 'https://canteen-sek5.onrender.com'
        },
        {
            imgSrc: "GameDevlopment.png",
            title: 'Game Development',
            description: 'Developed interactive games using HTML, CSS, and JavaScript, incorporating DOM manipulation and local storage. Designed SVG animations for engaging user experiences.learned about Github pages and hosted using that.',
            linkgithub: 'https://github.com/development.git',
            linklive: 'https://lakhman108.github.io/development/'
        },
        {
            imgSrc: "Mealminder.png",
            title: 'SmartStay',
            description: 'Developed REST API endpoints with Java SpringBoot, implementing JPA and security features. Documented 16 RESTful endpoints for various functionalities.',
            linkgithub: 'https://github.com/lakhman108/smartstay.git',
            linklive: 'https://smartstay.onrender.com'
        }
    ];

    return (
        <section id="projects" className="mb-16 px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imgSrc={project.imgSrc}
                        title={project.title}
                        description={project.description}
                        linkgithub={project.linkgithub}
                        linklive={project.linklive}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;