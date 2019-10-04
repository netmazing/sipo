import React from 'react';
import '../css/footer.css';
import {useStaticQuery} from 'gatsby';
import {graphql} from 'gatsby';

const getSiteAuthor = graphql`
query SiteAuthor {
    site {
      siteMetadata {
        author
      }
    }
  }
`

const Footer = () => {
    const data = useStaticQuery(getSiteAuthor)
    return (
        <footer className="footer">
            <div className="footer__icons">
                <div className="footer__icon">Logo</div>
                <div className="footer__icon">Logo</div>
                <div className="footer__icon">Logo</div>
            </div>
            <p className="footer__info">ul. Krakowska 71-71, 71-004 Szczecin</p>
            <p className="footer__copyrights">&copy; {new Date().getFullYear()} Socjologia i Psychologia Organizacji.<br/>Projekt i wykonanie <span className="site-author">{data.site.siteMetadata.author}</span></p>
        </footer>
    )
}

export default Footer
