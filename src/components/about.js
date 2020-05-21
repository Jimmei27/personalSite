import React from "react";
import Img from "gatsby-image";
import {useStaticQuery, graphql, Link} from "gatsby";

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      ny: file(relativePath: { eq: "NY.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gym: file(relativePath: { eq: "gym.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div id="about" className="about">
            <div className="container">
                <div className="inner-about">
                    <div className="content">
                        <h3>ABOUT
                        <p>
                        Hello there! I'm Jimmy Mei, a Software Engineer from New York. I enjoy turning ideas into products with an emphasis in thinking about engaging user experience and scalability. Learning new things everyday is part of my life.
                        </p>
                        <p>
                        When I'm not coding, I will be pumping iron like Dwayne "The Rock" Johnson, attending Gordon Ramsay’s cooking class (MasterChef), and keeping up with the NBA.
                        </p>
                        <p>
                        Technologies I work with:
                          <div className="skills">
                            <ul><li>JavaScript</li><li>TypeScript</li><li>React <br/>(Hooks/Routers)</li><li>Redux</li></ul>
                            <ul><li>Node</li><li>Express</li><li>SQL</li><li>NoSQL</li><li>RESTful APIs</li></ul>
                            <ul><li>HTML</li><li>CSS/SCSS</li><li>D3</li><li>Jest</li><li>Webpack</li></ul>
                          </div>
                        </p>
                        </h3>
                    </div>
                     <div className="images">
                         {/* <div className="top-right">
                            <Img fluid={data.ny.childImageSharp.fluid} />
                         </div>
                         <div className="bottom-left">
                            <Img fluid={data.gym.childImageSharp.fluid} />
                         </div> */}
                     </div>
                </div>
            </div>
            <div className="black-box"></div>
            <div className="black-box overlay"></div>
        </div>
    )
}

export default About;