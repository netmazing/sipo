import React from 'react';
import '../css/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <div className="footer__icon">Logo</div>
                <div className="footer__icon">Logo</div>
                <div className="footer__icon">Logo</div>
            </div>
            <p className="footer__info">ul. Krakowska 71-71, 71-004 Szczecin</p>
            <p className="footer__copyrights">&copy; {new Date().getFullYear()} Socjologia i Psychologia Organizacji. Projekt i wykonanie <span className="site-author">Trojnacki & Draganek</span></p>
        </footer>
    )
}

export default Footer
