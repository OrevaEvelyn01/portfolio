import React from 'react'

const Footer = () => {
  return (
   <footer className="footer section-width" id="contact">
          <div>
            <p className="section-kicker">Get in touch</p>
            <h2>Let's talk.</h2>
            <p className="footer-note">
              I'm open to opportunities to learn, collaborate and build
              useful things.
            </p>
          </div>

          <div className="footer-links">
            <a href="mailto:orevaevelyn1@gmail.com">Email me ↗</a>

            <a
              href="https://github.com/OrevaEvelyn01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/orevaoghene-obison-431059387"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

          <a className="back-top" href="#top">
            Back to top ↑
          </a>

           <p className="copyright">
          © {new Date().getFullYear()} Orevaoghene Obison.
        </p>
        </footer>
        
  )
}

export default Footer