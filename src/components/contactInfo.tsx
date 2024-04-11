import React from 'react';

const ContactInfo: React.FC = () => {
    return (
        <div className="p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="italic mb-4"> Our dedicated team is here to assist you and provide the best solutions for your home cleaning needs. </p>
            <p className="text-lg mb-2">
                <span className="font-bold">Phone:</span> (239) 285-4056
            </p>
            <p className="text-lg mb-2">
                <span className="font-bold">Email:</span> justcleanbee@gmail.com
            </p>
        </div>
    );
};

export default ContactInfo;
