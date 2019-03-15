import React from 'react';

import '../css/style.css';
import '../css/portfolio.css';

import SEO from '../components/seo';
import Header from '../components/Header';
import Social from '../components/Social';
import Details from '../components/Details';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const IndexPage = (props) => {
	return (
		<div id="home">
			<SEO title="Software Developer" keywords={[ `gatsby`, `application`, `react` ]} />
			<Header />
			<Social />
			<Details data={props} />
			<Portfolio />
			<Footer />
		</div>
	);
};

export default IndexPage;

export const postsQuery = graphql`
	query postsQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					fields {
						slug
					}
					excerpt(pruneLength: 130)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
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
`;
