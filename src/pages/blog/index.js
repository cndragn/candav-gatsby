import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../../components/layout';

const IndexPage = (props) => {
	console.log(props);
	const postList = props.data.allMarkdownRemark;
	return (
		<Layout>
			<div className="archive container">
				<div className="row">
					{postList.edges.map(({ node }, i) => (
						<div className="link col-md-6 col-lg-4" key={i}>
							<div className="post-list">
								<Link to={node.fields.slug}>
									<Img fluid={node.frontmatter.image.childImageSharp.fluid} />
								</Link>
								<div className="blog-entry">
									<p>{node.frontmatter.date}</p>
									<Link className="archive-title" to={node.fields.slug}>
										{node.frontmatter.title}
									</Link>
									<p>{node.excerpt}</p>
									<Link to={node.fields.slug}>Read more...</Link>
								</div>
							</div>
						</div>
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
					excerpt(pruneLength: 130)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						image {
							childImageSharp {
								resize(width: 1200, height: 200) {
									src
								}
								fluid(maxWidth: 1200) {
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
