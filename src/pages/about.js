import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

import { Divider } from "../styled-components/index"
import { SocialLinks } from "../styled-components/about"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          bio
          socials {
            name
            url
          }
        }
      }
    }
  `)
  const { siteMetadata: { bio, socials }  } = data.site;
  
  return (
    <Layout>
      <SEO title="About" description="About Me" />
      <p>{bio}</p>
      <SocialLinks>
        {socials.map(social => {
          if (socials.length === 1) return <a href={social.url}>{social.name}</a>
          return (
            <div key={social.url}>
              <a href={social.url}>{social.name}</a>
              {
                socials.lastIndexOf(social) === socials.length - 1 ? null : <Divider />
              }
            </div>
          )
        })}
      </SocialLinks>
    </Layout>
  )
}

export default About
