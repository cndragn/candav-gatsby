import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';

const IndexPage = (props) => {
	const postList = props.data.allMarkdownRemark;
	return (
		<Layout>
			<div className="archive container">
				<div className="row">
					{postList.edges.map(({ node }, i) => (
						<Link to={node.fields.slug} className="link col-md-6 col-lg-4">
							<div className="post-list">
								<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
								<div className="blog-entry">
									<p>{node.frontmatter.date}</p>
									<h1 className="blog-title">{node.frontmatter.title}</h1>
									<p>{node.excerpt}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</Layout>
	);
};
export default IndexPage;
export const listQuery = graphql`
	query ListQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					fields {
						slug
					}
					excerpt(pruneLength: 140)
					frontmatter {
						date(formatString: "MMMM Do YYYY")
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
