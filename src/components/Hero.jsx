import React from 'react';


const Header = () => {
    return (
        <header className="relative h-screen text-white">
            <video
                autoPlay
                loop
                muted
                className="absolute w-full h-full object-cover"
            >
                <source src="42e03f94-2287-4e71-929d-ef6dd2491ec2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">Parmar Lakhman</h1>
                    <p className="text-xl mb-8">Web Developer</p>
                    <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Get In Touch
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
