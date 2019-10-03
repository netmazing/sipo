import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/layout.css';
import { Helmet } from 'react-helmet';


const Layout = ({children}) => {
    return (
        <>
        <Helmet>
        <title>Socjologia i psychologia organizacji</title>
        </Helmet>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}

export default Layout
