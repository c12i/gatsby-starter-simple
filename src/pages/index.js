import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>Hello World</h2>
    <time>24 April 2020</time>
    <p>
    Cred actually pour-over typewriter. Cronut man braid butcher brunch, ennui mixtape skateboard gastropub tacos keffiyeh vegan polaroid. 
    Aesthetic sriracha vinyl, yr semiotics mlkshk vice iPhone sartorial 90's bitters forage. Chicharrones pop-up echo park truffaut ugh. 
    Knausgaard vice kale chips street art, health goth heirloom etsy master cleanse lumbersexual mlkshk pug. Small batch lumbersexual flannel, typewriter chartreuse truffaut thundercats. 
    Marfa tattooed mustache roof party gochujang blog.
    </p>
    <p>
    DIY deep v skateboard chillwave polaroid salvia, raw denim distillery bitters craft beer kickstarter. 
    Twee chambray blue bottle, poutine ramps helvetica cornhole ethical quinoa plaid put a bird on it tousled drinking vinegar humblebrag. 
    Selvage mixtape gentrify tilde listicle. Lomo meditation art party chartreuse, bushwick health goth cold-pressed hashtag fap. 
    Butcher swag ugh, ennui vegan cold-pressed photo booth sustainable portland umami
    </p>
    <img src="https://www.dropbox.com/s/edxzwj40g01n1ie/inspiration.jpg?raw=1" />
    <ul>
      <li>Unce</li>
      <li>Puce</li>
      <li>Duce</li>
    </ul>
  </Layout>
)

export default IndexPage
