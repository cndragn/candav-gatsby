/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./PageHeader"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main className="page">{children}</main>
          <Footer />
        </div>
        <div className="statcounter">
          <script type="text/javascript">
            var sc_project=3844398; var sc_invisible=1; var
            sc_security="34f6984a";
          </script>
          ,
          <script
            type="text/javascript"
            src="https://www.statcounter.com/counter/counter.js"
            async
          ></script>
          ,
          <noscript>
            <div className="statcounter">
              <a
                title="Web Analytics"
                href="https://statcounter.com/"
                target="_blank"
              >
                <img
                  className="statcounter"
                  src="https://c.statcounter.com/3844398/0/34f6984a/1/"
                  alt="Web Analytics"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </div>
          </noscript>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
