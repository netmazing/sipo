import React from 'react';
import Layout from '../components/Layout';
import { FaAngleDoubleDown } from 'react-icons/fa';
import {Link} from 'gatsby';
import '../css/index.css';
import '../css/about.css';
import '../css/actions.css';

const index = () => {

  return (
    <div className="homepage">
    <Layout>
      <header className="hero">
        <div className="hero__inner">
          <h1 className="hero__title site-title">Socjologia i psychologia organizacji</h1>
          <p className="hero__description">Zespół badawczy</p>
          <a href="#about" className="hero__btn">Poznaj nas<span className="btn__icon"><FaAngleDoubleDown/></span></a>
          <div className="hero__links">
            <a href="http://usz.edu.pl/" className="hero__link link">Uniwersytet Szczeciński</a>
            <a href="http://wh.usz.edu.pl/" className="hero__link link">Wydział Humanistyczny US</a>
          </div>
        </div>
      </header>
      <main>
        <article id="about" className="about">
          <div className="about__inner">
          <h2 className="about__title">Organizacja jako obszar badań</h2>
          <p className="about__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat, qui nam illo fugit exercitationem repudiandae maiores iure ullam obcaecati!</p>

          <section className="about__subsection">
            <h3 className="subsection__title">Procesy i przemiany</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="about__subsection">
            <h3 className="subsection__title">Struktura</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="about__subsection">
            <h3 className="subsection__title">Relacje międzyludzkie</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="about__subsection">
            <h3 className="subsection__title">Zażółć gęślą jaźń</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>
        </div>
        </article>

        <section className="actions">
          <h2 className="actions__title">Nasza działalność</h2>
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
            <Link className="actions__btn btn" to="/publikacje">Poczytaj nasze artykuły</Link>
            <Link className="actions__btn btn" to="/wydarzenia">Zobacz, co organizujemy</Link>
          </div>
        </section>

      </main>
    </Layout>
    </div>

  )
}

export default index

