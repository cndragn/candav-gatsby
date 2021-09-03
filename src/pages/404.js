import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import "../css/404.css"

import nope from "../images/nope.jpeg"

const NotFoundPage = () => (
  <Layout>
    <div className="notfound">
      <Seo title="404: Not found" />
      <h1 className="uhoh">Uh Oh!</h1>
      <div className="content">
        <h2>
          <Link to="/">Return To Home</Link>
        </h2>
        <h2>Looking for my resume?</h2>
        <p>
          <a
            href="DavidsonCandice-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here you go!
          </a>
        </p>
        <h2>Trying to find a blog post?</h2>
        <p>
          Unfortunately, I lost most of them. Read{" "}
          <Link to="../blog/importance-of-backups/">
            The Importance of Backups
          </Link>{" "}
          for more details.
        </p>
        <p>
          I was able to save and re-write some of them, so{" "}
          <Link to="../blog/">check out my blog</Link> to see if you can find
          what you are looking for.
        </p>
        <h2>Need freelance work?</h2>
        <img src={nope} alt="Cute nope" />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
