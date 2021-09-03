import React from "react"
import { Link, graphql } from "gatsby"

import "../css/style.css"
import "../css/portfolio.css"

import Seo from "../components/seo"
import Header from "../components/Header"
import Social from "../components/Social"
// import Details from './Details';
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"

const IndexPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <div id="home">
      <Seo
        title="Software Developer"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Header />
      <Social />
      <div className="container main">
        <div className="row">
          <div className="skills col-sm-12 col-md-7">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Skills</h3>
                <h4>Front End:</h4>
                <p className="card-text">
                  React.js, Redux, JavaScript, TypeScript, HTML, CSS, Sass,
                  ASP.NET
                </p>
                <h4>Back End:</h4>
                <p className="card-text">
                  Azure AD, RESTful API, OAuth, MongoDB, Express.js, Node.js,
                  C#, .NET
                </p>
                <h4>Project Tools:</h4>
                <p className="card-text">
                  Azure DevOps, Visual Studio, Visual Studio Code, Travis-CI,
                  Heroku, Git, Github, Jest, Enzyme, npm
                </p>
              </div>
            </div>
          </div>
          <div className="contact col-sm-12 col-md-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Get In Touch</h3>
                <p className="card-text">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <a href="mailto:HeyaCandice@gmail.com">
                    HeyaCandice@gmail.com
                  </a>
                </p>
                <p className="card-text">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <a href="tel:305-432-4789">305-432-4789</a>
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Recent Posts</h3>
                <p className="card-text" />
                <div>
                  {postList.edges.slice(0, 3).map(({ node }, i) => (
                    <p className="recent" key={i}>
                      <span>{node.frontmatter.date}</span>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
      <Footer />
    </div>
  )
}

export default IndexPage

export const postsQuery = graphql`
  query postsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 130)
          frontmatter {
            date(formatString: "MMM DD")
            title
            image {
              childImageSharp {
                resize(width: 1140, height: 300) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
