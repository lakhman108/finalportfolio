import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => (
        <div className="bg-gray-100 font-sans leading-normal tracking-normal">
            <Navbar />
            <Hero />
            <main className="container mx-auto mt-8 px-4">
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );

    export default App;