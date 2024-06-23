import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegistrationType } from './earlyRegistration';
import { useRouter } from 'next/router';

type ContactFormProps = {
    type: RegistrationType
}

const ContactForm: React.FC<ContactFormProps> = ({ type }: ContactFormProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [tshirt, setTshirt] = useState('');
    const [isJudge, setIsJudge] = useState('');
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const data = {
            name,
            email,
            message,
            not_a_bot: true,
            type,
            isJudge,
            tshirt
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
            setTshirt('')
            setIsJudge('')
        } else {
            console.error(result.error)
            toast.error('Error sending message. Please try again later.')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="w-full mx-auto p-4 rounded-lg">
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
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
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
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
                    />
                </div>
                {type == RegistrationType.VOLUNTEER && (
                    <>
                        <div className="mb-4 flex flex-row justify-between">
                            <div className="flex-1">
                                <label htmlFor="tshirt" className="block font-bold mb-2">
                                    T-Shirt Size
                                </label>
                                <select
                                    id="tshirt"
                                    name="tshirt"
                                    value={tshirt}
                                    onChange={(e) => setTshirt(e.target.value)}
                                    required
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
                                >
                                    <option value="">Select a size</option>
                                    <option value="S">Small</option>
                                    <option value="M">Medium</option>
                                    <option value="L">Large</option>
                                    <option value="XL">Extra Large</option>
                                </select>
                            </div>
                            <div>
                                <div className="ml-4">
                                    <label htmlFor="isJudge" className="block font-bold mb-2">
                                        Are you a judge?
                                    </label>
                                    <select
                                        id="isJudge"
                                        name="isJudge"
                                        value={isJudge.toString()}
                                        onChange={(e) => setIsJudge(e.target.value)}
                                        required
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
                                    >
                                        <option value="No">No</option>
                                        <option value="Yes">Yes</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </>
                )
                }
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
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-yellow-500 text-black"
                        rows={4}
                        placeholder={type == RegistrationType.ATHLETE ? `Leave your phone number, age, and competition level.` : type == RegistrationType.VENDOR ? `Leave your business name and products.` : type == RegistrationType.VOLUNTEER ? `Leave your availability and t-shirt size!` : `Leave your message here.`}
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-400 focus:outline-none">
                        Send Message
                    </button>
                </div>
            </form>
            <ToastContainer />
        </>
    );
};

export default ContactForm;
