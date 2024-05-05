import ContactForm from '@/components/contactForm'
import ContactInfo from '@/components/contactInfo'
import Container from '@/components/container'
import { RegistrationType } from '@/components/earlyRegistration'
import React from 'react'


const Contact = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row justify-center">
                <div className="mb-4 md:mb-0 md:w-1/3">
                    <ContactInfo />
                </div>
                <div className="md:w-1/3">
                    <ContactForm type={RegistrationType.ATHLETE} />
                </div>
            </div>
        </Container>
    )
}

export default Contact