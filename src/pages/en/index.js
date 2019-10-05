import React from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa'
import LayoutEn from '../../components/en/LayoutEn';
import {Link} from 'gatsby';
import '../../css/index.css';
// import { Helmet } from 'react-helmet';


const indexEn = () => {
  return (
    <div className="homepage">
    <LayoutEn>
      <header className="hero">
        <div className="hero__inner">
          <h1 className="hero__title site-title">Organizational Sociology and Psychology</h1>
          <p className="hero__description">Research group</p>
          <a href="#about" className="hero__btn">Read more<span className="btn__icon"><FaAngleDoubleDown/></span></a>
          <div className="hero__links">
            <a href="http://usz.edu.pl/" className="hero__link link">University of Szczecin</a>
            <a href="http://wh.usz.edu.pl/" className="hero__link link">Faculty of Humanities</a>
          </div>
        </div>
      </header>

      <main>
        <article id="about" className="about">
          <div className="about__inner">
          <h2 className="about__title">Organization as a research area</h2>
          <p className="about__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat, qui nam illo fugit exercitationem repudiandae maiores iure ullam obcaecati!</p>

          <section className="about__subsection">
            <h3 className="subsection__title">Processes and transformations</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="about__subsection">
            <h3 className="subsection__title">Structure</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="about__subsection">
            <h3 className="subsection__title">Interpersonal relations</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="about__subsection">
            <h3 className="subsection__title">Peter Piper picked a peck of pickled peppers</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>
        </div>
        </article>

        <section className="actions">
          <h2 className="actions__title">What we do</h2>
          <ul className="actions__list">
            <li className="actions__item">
              <span className="actions__icon">icon</span>
              <span className="actions__action-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente.</span>
            </li>

            <li className="actions__item">
              <span className="actions__icon">icon</span>
              <span className="actions__action-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente.</span>
            </li>

            <li className="actions__item">
              <span className="actions__icon">icon</span>
              <span className="actions__action-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente.</span>
            </li>

            <li className="actions__item">
              <span className="actions__icon">icon</span>
              <span className="actions__action-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, sapiente.</span>
            </li>
          </ul>

          <div className="actions__links">
            <Link className="actions__btn btn" to="/publikacje">Read our articles</Link>
            <Link className="actions__btn btn" to="/wydarzenia">Check what we organize</Link>
          </div>
        </section>

      </main>

    </LayoutEn>
    </div>
  )
}

export default indexEn

