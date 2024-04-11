import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const data = {
            name,
            email,
            message,
            not_a_bot: true,
        }
        const response = await fetch('/api/contact', {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })

        const result = await response.json()
        if (!result.error) {
            toast.success('Message sent successfully!')
            // clear form
            setName('')
            setEmail('')
            setMessage('')
        } else {
            console.error(result.error)
            toast.error('Error sending message. Please try again later.')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full mx-auto p-4 shadow-md rounded-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
                        rows={4}
                        placeholder='Leave your phone number, age, and competition level.'
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-400 focus:outline-none">
                        Early Registration
                    </button>
                </div>
            </form>
            <ToastContainer />
        </>
    );
};

export default ContactForm;
