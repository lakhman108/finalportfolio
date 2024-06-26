import React from 'react';


const About = () => {
    return (
        <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
                <img src="ok.jpg" alt="Me you" className="w-64 h-64 rounded-full mb-4 md:mr-8" />
                <p className="text-gray-700 leading-relaxed">
                    I'm a passionate web developer currently pursuing my B.Tech in Computer Engineering from Dharmsinh Desai University, Nadiad. With a strong foundation in both front-end and back-end technologies, I have a knack for solving complex problems and creating intuitive designs. My skills include HTML, CSS, JavaScript, C++, Java, PHP, and Python. I have hands-on experience with frameworks like Django and Spring Boot, and I am proficient in working with relational databases like MySQL and PostgreSQL.
                </p>
            </div>
        </section>
    );
};

export default About;