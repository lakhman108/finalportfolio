import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt,faJava,faPhp } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
const skills = [
    { icon: faHtml5, color: 'text-orange-500', name: 'HTML5' },
    { icon: faCss3Alt, color: 'text-blue-500', name: 'CSS3' },
    { icon: faJs, color: 'text-yellow-500', name: 'JavaScript' },
    { icon: faReact, color: 'text-blue-400', name: 'React' },
    { icon: faNodeJs, color: 'text-green-500', name: 'Node.js' },
    { icon: faDatabase, color: 'text-gray-700', name: 'SQL' },
    { icon: faGitAlt, color: 'text-orange-600', name: 'Git' },
     { icon: faJava, color: 'text-green-600', name: 'Java' },
     { icon: faPhp, color: 'text-green-600', name: 'Php' },
    { icon: faMobileAlt, color: 'text-gray-800', name: 'Responsive Design' }
];

const Skills = () => (
    <section id="skills" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map(skill => (
                <div key={skill.name} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <FontAwesomeIcon icon={skill.icon} className={`${skill.color} skill-icon`} />
                    <p className="mt-2">{skill.name}</p>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;