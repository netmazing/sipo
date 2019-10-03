import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa'
import LayoutEn from '../../components/en/LayoutEn';
import '../../css/index.css';
// import { Helmet } from 'react-helmet';


const indexEn = () => {
  return (
    <div className="homepage">
    <LayoutEn>
      <header className="hero">
        <div className="hero__inner">
          <h1 className="hero__title site-title">Organizational Sociology and Psychology</h1>
          <p className="hero__description">Research group Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nesciunt.</p>
          <a href="#about" className="hero__btn btn">Read more<span className="btn__icon"><FaAngleDoubleDown/></span></a>
          <div className="hero__links">
            <a href="http://usz.edu.pl/" className="hero__link link">University of Szczecin</a>
            <a href="http://wh.usz.edu.pl/" className="hero__link link">Faculty of Humanities</a>
          </div>
        </div>
      </header>
    </LayoutEn>
    </div>
  )
}

export default indexEn

