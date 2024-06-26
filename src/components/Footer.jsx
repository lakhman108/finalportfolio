import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

    const Footer = () => (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://github.com/lakhman108" target="_blank" className="text-2xl hover:text-blue-400 transition duration-300"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/parmar-lakhman-5a876825b/" target="_blank" className="text-2xl hover:text-blue-400 transition duration-300"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://www.linkedin.com/in/parmar-lakhman-5a876825b/" target="_blank" className="text-2xl hover:text-blue-400 transition duration-300"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
                <p>&copy; 2024 Parmar lakhman. All rights reserved.</p>
            </div>
        </footer>
    );

    export default Footer;