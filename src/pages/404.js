import React from "react"
import Layout from "../components/layout/layout"

import styled from "styled-components"

// s/o to https://codepen.io/pgalor/pen/OeRWJQ

export const NotFoundContainer = styled.div`
  text-align: center;
  margin: 0;
  font-size: 96px;
  font-family: 'Fira Mono', monospace;
  letter-spacing: -7px;
  animation: glitch 1s linear infinite;

  @keyframes glitch{
    2%,64%{
      transform: translate(2px,0) skew(0deg);
    }
    4%,60%{
      transform: translate(-2px,0) skew(0deg);
    }
    62%{
      transform: translate(0,0) skew(5deg); 
    }
  }

  &:before,
  &:after {
    content: attr("404");
    position: absolute;
    left: 0;
  }

  &:before{
    animation: glitchTop 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  @keyframes glitchTop{
    2%,64%{
      transform: translate(2px,-2px);
    }
    4%,60%{
      transform: translate(-2px,2px);
    }
    62%{
      transform: translate(13px,-1px) skew(-13deg); 
    }
  }

  &:after{
    animation: glitchBotom 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }

  @keyframes glitchBotom{
    2%,64%{
      transform: translate(-2px,0);
    }
    4%,60%{
      transform: translate(-2px,0);
    }
    62%{
      transform: translate(-22px,5px) skew(21deg); 
    }
  }
`

const NotFoundPage = () => (
  <Layout>
    <NotFoundContainer>404!</NotFoundContainer>
    <p style={{textAlign: 'center'}}>I find your lack of navigation disturbing...</p>
  </Layout>
)

export default NotFoundPage
