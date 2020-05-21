import React from "react";
import styled from 'styled-components'
import Particles from 'react-particles-js';

const Gradient = styled.span`
  background: linear-gradient(
    270deg,
    #ff5f6d,
    #ffc371,
    #c34dbf,
    #ff4b1f,
    #ff9068,
    #16bffd,
    #a84dc3,
    #cb3066,
    #4ca1af,
    #c4e0e5
  );
  background-size: 2000% 2000%;
  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
  @-webkit-keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Banner = () => {
  
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text"> 
                      <h3> Jimmy Mei</h3>
                      <h4><Gradient>Software Engineer</Gradient></h4>
                    </div>
                    <div className="main-image">
                    <Particles 
                      params={{ 
                        particles: { 
                          number: { 
                            value: 200, 
                            density: { 
                              enable: true, 
                              value_area: 1000, 
                                } 
                              }, 
                            }, 
                            }} 
                          /> 
                    </div>
                </div>
            </div>
            <div className="fixed-misc">Jimmy Mei</div>
            <div className="fixed-top"><a class="arrow" title="Scroll to top" href="#">&#10140;</a></div>
        </div>
    )
}

export default Banner;