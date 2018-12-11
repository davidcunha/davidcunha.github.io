import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import about from '../assets/images/about.jpg'

const About = props => (
  <Layout>
    <Helmet>
      <title>About</title>
      <meta name="description" content="About" />
    </Helmet>

    <Banner title="About" img={about} />

    <div id="main">
      <section id="one">
        <div className="inner">
          <p>
            I’m a professional Software Engineer and Scrum Master with more than
            6 years of experience based in sunny Portugal. Interested in
            building scalable web apps that make people happy.
          </p>
          <p>I love to:</p>
          <p>
            <span role="img">👥</span> Help Developers and Teams
            <br />
            <span role="img">👨‍💻</span> Write code
            <br />
            <span role="img">✈️</span> Travel and experience new things
            <br />
          </p>
        </div>
        <div className="inner">
          <header className="major">
            <h3>Testimonials</h3>
          </header>
          <div className="quote">
            <blockquote>
              “Working with David, it’s just a pleasure! I can easily say that
              he is the person that I most respect professionally - hardworking,
              talented, caring, perfectionist, trustworthy, humble - The truth
              is that I could go on with words to describe him. Amazing talented
              people like David are hard to stick with you on your team because
              they are never satisfied and always pushing the bar. I couldn’t
              recommend him more.”
            </blockquote>
            <div className="author">
              <strong>Ricardo Parente - CEO @ PICUS.</strong>
            </div>
          </div>
          <div className="quote">
            <blockquote>
              “I have been working, for some time now, with David in some side
              projects and own ideas of ours. I have to say it’s an absolute joy
              to work with him. Besides being objective and very pragmatic, he
              is not satisfied with any solution, but the right one(the right
              tool, for the job). Besides this, the fact of being a good
              colleague, makes a painful job, a more enjoyable experience. Would
              really like to have the opportunity to work with him full time.”
            </blockquote>
            <div className="author">
              <strong>Rui Peres - Engineering Manager @ Babylon Health</strong>
            </div>
          </div>
        </div>
        <div className="inner">
          <header className="major">
            <h3>Full version</h3>
          </header>
          <p>
            I started as a self-taught programmer a couple of years ago, and as
            many devs, I suffered from <em>impostor syndrome</em> early in my
            career. I always compared myself to other peers and felt terrible
            because my foundations weren’t rock-solid at a time the team needed
            me for delivering high-quality code.
          </p>
          <p>And my dear friends, this feeling can hit you hard...</p>
          <p>
            So I spent years reading books, networking with other developers,
            and most importantly coding different type of projects from frontend
            to backend and distributed computing, while I was working in several
            companies.
          </p>
          <p>
            At the beginning of my path, I was a Researcher in the field of{' '}
            <strong>Cloud Computing</strong> where I met brilliant folks in all
            over Europe from whom I learned fundamental concepts for building
            computing resources’ allocation recommendation algorithms - fancy
            schmancy <span role="img">😆</span>. However, none of my efforts
            were targeted to build actual products that normal people would use.
            Believe me, R&amp;D is paramount for brainstorming and delivering,
            today, what could be tomorrow’s products. However, at that time,
            what I really wanted was to solve real problems from end-users and
            to be part of the delivery pipeline of an <strong>Agile</strong>{' '}
            team <span role="img">🚀</span>
          </p>
          <p>
            <strong>
              That’s when my journey to become a ‘Product Engineer’ started!
            </strong>
          </p>
          <p>
            I joined web product development agencies where I had the
            opportunity to meet founders from Startups that aimed to build
            sustainable businesses from their dreams. Back in the day,{' '}
            <strong>
              <a
                href="https://rubyonrails.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ruby on Rails
              </a>
            </strong>{' '}
            was the go-to framework - quick, predictable and fun to use, it made
            possible our clients’ ideas and <strong>MVPs</strong>, respecting
            performance requirements and deadlines. I was really into the RoR
            and <strong>Ruby</strong> community, that I participated in
            conferences, Slack groups, wrote gems, and felt that great vibe
            around beautiful and well-tested code. Ah yes… <strong>TDD</strong>{' '}
            and testing in general are absolutely cemented in the Ruby devs
            mindset.
          </p>
          <p>
            <strong>Ruby on Rails</strong> was used when we were building from
            scratch, but from time to time I had to rescue projects and help
            Startups to meet their vision:{' '}
            <strong>
              Java, PHP, Laravel, Python, Backbone.js, Sass, React
            </strong>
            , well you name it. As Software Engineers be prepared to learn
            different programming languages and frameworks, but with the
            experience, you will notice that standard computer science concepts
            and paradigms are still being applied every day.
          </p>
          <p>
            At that time{' '}
            <strong>
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Node.js
              </a>
            </strong>{' '}
            was the new kid on the block <span role="img">😎</span>.
            Non-blocking IO, real-time communications, capable of handling a
            great number of simultaneous connections with high throughput. After
            consuming content from{' '}
            <a
              href="https://twitter.com/substack"
              target="_blank"
              rel="noopener noreferrer"
            >
              @substack
            </a>
            ,{' '}
            <a
              href="https://twitter.com/mikeal"
              target="_blank"
              rel="noopener noreferrer"
            >
              @mikeal
            </a>
            ,{' '}
            <a
              href="https://twitter.com/izs"
              target="_blank"
              rel="noopener noreferrer"
            >
              @izs
            </a>{' '}
            or{' '}
            <a
              href="https://twitter.com/dshaw"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dshaw
            </a>
            , I felt mesmerized with what Node could be for the future web
            stack, and well it did! I coded and learned, in my free time, many
            concepts around streams, networking, callbacks, and web sockets. I
            recall as being a great experience that took me to the next level.
            Coming from Ruby, the Node community was distinctive, but at its
            genesis, they had the same open-source values and productive tools,
            plus everything was async! I was sold.
          </p>
          <p>
            In the last years, the{' '}
            <strong>JavaScript ecosystem grew exponentially</strong>, and you
            can now code a full-stack application with only one language (if you
            put aside SQL, markups, and stylesheets). Isn’t it awesome?{' '}
            <span role="img">🎉</span> Been sometime now that I can say that
            JavaScript is my daily programming language.
          </p>
          <p>
            For beginners or even seasoned developers, important language
            details can be daunting. I assure you that after reading{' '}
            <a
              href="https://github.com/getify/You-Dont-Know-JS"
              target="_blank"
              rel="noopener noreferrer"
            >
              You-Dont-Know-JS
            </a>{' '}
            by{' '}
            <a
              href="https://twitter.com/getify"
              target="_blank"
              rel="noopener noreferrer"
            >
              @getify
            </a>{' '}
            you’ll start to get it. Go read it, select the chapters that you
            most want to learn about,{' '}
            <a
              href="https://twitter.com/getify"
              target="_blank"
              rel="noopener noreferrer"
            >
              @getify
            </a>
            ’s writing is insightful and full of in-depth examples.
          </p>
          <p>
            Coding isn’t all it matters to me.{' '}
            <strong>
              Building a business isn’t easy. Even worst a profitable one.
            </strong>{' '}
            As an Engineer close to business decisions and building features
            that can impact the happiness of end-users and consequently
            product’s growth, I needed to get acquainted with the business
            domain I was working on. Knowing how to explain technical decisions
            to laymen, driving the communication, and how to push back a
            requirement when I saw associate risks involved, is paramount to
            succeed!
          </p>
          <p>Some of my favourite books:</p>
          <ul>
            <li>
              <strong>
                <a
                  href="https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lean Startup
                </a>
              </strong>{' '}
              by Eric Ries
            </li>
            <li>
              <strong>
                <a
                  href="https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zero to One
                </a>
              </strong>{' '}
              by Peter Thiel and Blake Masters
            </li>
            <li>
              <strong>
                <a
                  href="https://www.amazon.com/Scrum-Doing-Twice-Work-Half/dp/038534645X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scrum: The Art of Doing Twice the Work in Half the Time
                </a>
              </strong>{' '}
              by Jeff Sutherland
            </li>
            <li>
              <strong>
                <a
                  href="http://www.gv.com/sprint/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design Sprint
                </a>
              </strong>{' '}
              by Jake Knapp, John Zeratsky and Braden Kowitz
            </li>
            <li>
              <strong>
                <a
                  href="https://www.amazon.com/Mythical-Man-Month-Software-Engineering-Anniversary/dp/0201835959"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Mythical Man-Month
                </a>
              </strong>{' '}
              by Frederick P. Brooks, Jr
            </li>
            <li>
              <strong>
                <a
                  href="https://www.amazon.com/Business-Model-Generation-Visionaries-Challengers/dp/0470876417"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Model Generation
                </a>
              </strong>{' '}
              by Alexander Osterwalder and Yves Pigneur
            </li>
          </ul>
          <p>
            These books really opened my mind to entrepreneurship, management,
            productivity, the art of keeping it simple, and how to work as a
            Startup, which makes sense, as I’m currently working mainly for
            Startups‍ <span role="img">😃</span>
          </p>
          <p>
            Although bear that none of the concepts learned are silver bullets.
            There will still be moments of anxiety over meeting deadlines, poor
            communication, frustration with technology, low energy, or people
            not supporting your ideas, even with the best team available.
            Connecting the dots, emotional intelligence, and the culture you can
            nourish around you is what can make the difference in the end.
          </p>
          <p>
            With the experience acquired all over the years, I’m now regularly
            giving training to small to medium sized teams, mentoring CS
            students and was invited to teach in Northen Portugal Universities.
            Besides mentorship, I also act as a facilitator between the
            Development team and the Product Owner in order to build
            high-performance teams and excellent products.
          </p>
        </div>
        <div className="inner">
          <header className="major">
            <h3>What I can help you with</h3>
          </header>
          <ul>
            <li>I have an idea for a project. How should I approach it?</li>
            <li>
              We have a ton of bugs because we’re not applying testing. What and
              how should I test?
            </li>
            <li>I need to grow my backend/full-stack team.</li>
            <li>
              What do you think about &lt;<em>tech-name-here</em>&gt; ? Should
              we use it?
            </li>
            <li>
              We’re shipping software, but we carry over every Sprint. What
              should we do?
            </li>
            <li>How can I make this code work?</li>
            <li>How can I improve this code?</li>
          </ul>
        </div>
        <div className="inner">
          <header className="major">
            <h3>Training</h3>
          </header>
          <p>I’m currently giving training in the following subjects:</p>
          <ul>
            <li>Git and Github</li>
            <li>Scrum</li>
            <li>Rapid development with Ruby on Rails</li>
            <li>
              <a
                href="https://jschool.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JavaScript and Node.js introduction
              </a>
            </li>
            <li>
              How to build client-side experiences on reusable components with
              React
            </li>
            <li>Software Testing</li>
            <li>Web fundamentals - HTML, CSS, JavaScript, HTTP</li>
          </ul>
          <p>
            <a
              href="mailto:davidgoncalvescunha@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mail me here
            </a>{' '}
            for pricing, and I’ll be very happy to help you, your team or your
            students!
          </p>
          <p>
            Ah! And every weekday, I’m available for a direct or remote
            30-minute free session between 18:00-20:00 (GMT). Just contact me
            via{' '}
            <a
              href="mailto:davidgoncalvescunha@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>{' '}
            to schedule it <span role="img">🤙</span>
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
