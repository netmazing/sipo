import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import '../css/index.css';
import '../css/about.css';
import '../css/actions.css';

const index = ({data}) => {
  return (
    <div className="homepage">
    <Layout>
      <header className="hero">
        <div className="hero__inner">
          <h1 className="hero__title site-title">{data.site.siteMetadata.title}</h1>
          <p className="hero__description">Zespół badawczy</p>
          <div className="hero__links">
            <a href="http://usz.edu.pl/" className="hero__link">Uniwersytet Szczeciński</a>
            <a href="http://wh.usz.edu.pl/" className="hero__link">Wydział Nauk Społecznych</a>
          </div>
        </div>
      </header>
      <main>
        <article id="about" className="about">
          <div className="about__inner">
          <h2 className="about__title">Organizacja jako obszar badań</h2>
          <p className="about__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat, qui nam illo fugit exercitationem repudiandae maiores iure ullam obcaecati!</p>

          <section className="subsection">
            <h3 className="subsection__title">Procesy i przemiany</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Struktura</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="subsection">
            <h3 className="subsection__title">Relacje międzyludzkie</h3>
            <p className="subsection__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aut nostrum nam numquam minus perferendis, natus vel quisquam alias quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores similique, recusandae inventore ipsum repudiandae autem reprehenderit, amet dolorum deserunt doloremque fugiat magni totam deleniti in ipsam debitis iusto nihil reiciendis.</p>
          </section>

          <section className="subsection">
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
            <AniLink className="actions__btn btn" fade to="/publikacje">Poczytaj nasze artykuły</AniLink>
            <AniLink className="actions__btn btn" fade to="/wydarzenia">Zobacz, co organizujemy</AniLink>
          </div>
        </section>

      </main>
    </Layout>
    </div>

  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default index

