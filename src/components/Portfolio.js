import React from "react"
import Img from "gatsby-image";
import {useStaticQuery, graphql} from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
  const data = useStaticQuery(graphql`
  query {
    chronoscope: file(relativePath: { eq: "ChronScope.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    playBox: file(relativePath: { eq: "PlayBox.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bagged: file(relativePath: { eq: "bagged.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cryptoKeeper: file(relativePath: { eq: "cryptoKeeper.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dotCatch: file(relativePath: { eq: "dotCatch.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    healthQuery: file(relativePath: { eq: "healthQuery.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
            <h3>Portfolio</h3>
          <div className="content">
                <div className="project">
                  <div className="projectImage">
                    <Img className="images" fluid={data.chronoscope.childImageSharp.fluid} />
                  </div>
                  <div className="projectInfo">
                    <h4>React ChronoScope</h4>
                    <h5>Developers' tool to monitor React performance and pinpoint areas that require further optimization</h5>
                    <p>JavaScript TypeScript React ChromeWebApi NPM D3.js React-vis Jest</p>
                    <div className="external">
                      <a href="https://chrome.google.com/webstore/detail/react-chronoscope/haeiefchakokoggcngggkfbgklaifbbm">(Check it Out)</a>
                      <a className="git" href="https://github.com/oslabs-beta/react-chronoscope" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>
                <div className="project">
                  <div className="projectImage">
                    <Img className="images" fluid={data.playBox.childImageSharp.fluid} />
                  </div>
                  <div className="projectInfo">
                    <h4>PlayBox</h4>
                    <h5>Classic Games! <br/> Tic Tac Toe  Snake Game  HangMan  Rock Paper Scissor</h5>
                    <p>JavaScript React Hooks Routers Webpack <br/> Babel</p>
                    <div className="external">
                      <a href="https://jimmei27.github.io/PlayBox/#/">(Check it Out)</a>
                      <a className="git" href="https://github.com/Jimmei27/PlayBoxx" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>
                <div className="project">
                  <div className="projectImage">
                    <Img className="images" fluid={data.cryptoKeeper.childImageSharp.fluid} />
                  </div>
                  <div className="projectInfo">
                    <h4>Crypto-Keeper</h4>
                    <h5>Mock trading platform for cryptocurrencies with a virtual portfolio </h5>
                    <p>JavaScript Node Express PostgreSQL Bcrypt Chart.js</p>
                    <br/>
                    <div className="external">
                      <a href="">(Check it Out) ...coming soon</a>
                      <a className="git" href="https://github.com/Jimmei27/crypto-exchange" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>
                <div className="project">
                  <div className="projectImage">
                    <Img className="images" fluid={data.dotCatch.childImageSharp.fluid} />
                  </div>
                  <div className="projectInfo">
                    <h4>dotCatch</h4>
                    <h5>Matchmaking platform to find developers for your next project </h5>
                    <p>Node Express Github OAuth AWS(EC2)</p>
                    <br/>
                    <br/>
                    <div className="external">
                      <a href="">(Check it Out) ...coming soon</a>
                      <a className="git" href="https://github.com/Jimmei27/dot-catch" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>
                <div className="project">
                  <div className="projectImage">
                    <Img className="images" fluid={data.healthQuery.childImageSharp.fluid} />
                  </div>
                  <div className="projectInfo">
                    <h4>Health Query</h4>
                    <h5>Safety and awareness data visualization <br/> tool </h5>
                    <p>React Hooks Routers D3.js Google OAuth</p>
                    <br/>
                    <br/>
                    <div className="external">
                      <a href="">(Check it Out) ...coming soon</a>
                      <a className="git" href="https://github.com/Jimmei27/HealthQuery" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>
                <div className="project">
                  <div className="projectImage">
                    <Img className="images" fluid={data.bagged.childImageSharp.fluid} />
                  </div>
                  <div className="projectInfo">
                    <h4>Bagged</h4>
                    <h5>Grocery! <br/>Virtual grocery shopping list </h5>
                    <p>React Node Express PostgreSQL Bcrypt Webpack</p>
                    <br/>
                    <div className="external">
                      <a href="">(Check it Out) ...coming soon</a>
                      <a className="git" href="https://github.com/Jimmei27/Bagged" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio