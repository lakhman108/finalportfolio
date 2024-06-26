import React, { useState, useEffect } from 'react';
import { init, send } from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        init("_HLho1hZOwtCJ7BiZ");
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        send('service_1g8l7yh', 'template_i7zdkgf', {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully');
            setFormData({ name: '', email: '', message: '' });
        }, (err) => {
            console.log('FAILED...', err);
            alert('Failed to send message');
        });
    };

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        required
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;