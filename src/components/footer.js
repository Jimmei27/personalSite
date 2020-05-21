import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="contactType">
        <div className="container">
          <a id="contact"></a>
          <ul>
            <h2>Contact</h2>
            <li><a href="https://www.linkedin.com/in/jimmymei/" target="_blank" ><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href="https://github.com/Jimmei27" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href="https://angel.co/u/jimmy-mei" target="_blank"><FontAwesomeIcon icon={faAngellist}/></a></li>
            <li><a href="mailto:jimmymei27@gmail.com?Subject=Hello!" target="_blank"><FontAwesomeIcon icon={faEnvelope}/></a></li>
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="inner">
                <span></span>
          <div className="footNote">
              <span>Copyright © 2019 Jimmy Mei</span>
          </div>
          <span>Built with React and GatsbyJS</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer