import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import '../css/contact.css'

const contact = () => {
    return (
        <Layout>
            <main>
                <section className="contact">
                    <h1 className="contact__title">Skontaktuj się z nami</h1>
                    <address className="contact__address"></address>
                    <ContactForm />
                </section>
            </main>
        </Layout>
    )
}

export default contact
