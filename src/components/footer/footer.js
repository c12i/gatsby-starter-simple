import React from "react"

import { FooterContainer } from "../../styled-components/footer"

const Footer = ({ title }) => (
  <FooterContainer>
    { title }  © {new Date().getFullYear()}
  </FooterContainer>
)

export default Footer