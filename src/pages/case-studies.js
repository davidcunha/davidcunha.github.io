import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import caseStudies from '../assets/images/case-studies.jpg'
import caseStudy1 from '../assets/images/mucho-case-study.jpg'
import caseStudy2 from '../assets/images/neuroscience-case-study.jpg'
import caseStudy3 from '../assets/images/cocktail-shop-case-study.jpg'

const CaseStudies = props => (
  <Layout>
    <Helmet>
      <title>Case Studies</title>
      <meta name="description" content="Case Studies" />
    </Helmet>

    <Banner title="Case Studies" bgImg={caseStudies} />

    <div id="main">
      <section id="one" className="spotlights">
        <section className="case-study">
          <Link to="/case-studies/mucho" className="image">
            <div style={{ backgroundImage: `url(${caseStudy1})` }} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Mucho</h3>
              </header>
              <p>
                Mucho provides a personalized experience for grocery shopping
                with inspirational recipes contributed by a trusted community of
                foodies. With a few clicks, ingredients for recipes and
                breakfast &amp; snacks are ordered, and a selected supermarket
                will delivery the order to the customer’s doorstep.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/case-studies/mucho" className="button special">
                    View Case Study
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="case-study">
          <Link to="/case-studies/neuroscience" className="image">
            <div style={{ backgroundImage: `url(${caseStudy2})` }} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Neuroscience</h3>
              </header>
              <p>
                Neuroscience (client’s name and website disclosed) were two R&D
                projects that solved distinctive problems through digital
                therapeutic solutions: Neurofeedback and Neurogames.
                Neurofeedback had as primary objective to innovate the standard
                process of assessing patient’s brainwave activity EEG
                (electroencephalogram) biofeedback. On the other hand,
                Neurogames was state of the art applied methodology that used
                HTML5 cognitive games to assess and improve patient’s brain
                functions.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    to="/case-studies/neuroscience"
                    className="button special"
                  >
                    View Case Study
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="case-study">
          <Link to="/case-studies/cocktail-shop" className="image">
            <div style={{ backgroundImage: `url(${caseStudy3})` }} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Cocktail Shop</h3>
              </header>
              <p>
                Cocktail Shop (client’s name and website disclosed) provides a
                unique online shopping experience to create and deliver
                customized cocktails. From flavors to spirits, liqueurs, wine,
                or garnish, customers can build a cocktail step by step or
                select a bartender recommendation to be quickly delivered to
                their doorstep for a wonderful party.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    to="/case-studies/cocktail-shop"
                    className="button special"
                  >
                    View Case Study
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default CaseStudies
