import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white font-bold text-xl">PL</a>
                <div className="hidden md:flex space-x-4">
                    <a href="#about" className="text-gray-300 hover:text-white">About</a>
                    <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
                    <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
                    <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
                </div>
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden bg-gray-800 p-4">
                    <a href="#about" className="block text-gray-300 hover:text-white py-2">About</a>
                    <a href="#skills" className="block text-gray-300 hover:text-white py-2">Skills</a>
                    <a href="#projects" className="block text-gray-300 hover:text-white py-2">Projects</a>
                    <a href="#contact" className="block text-gray-300 hover:text-white py-2">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;