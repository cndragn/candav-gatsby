import React from 'react';
import { Link, graphql } from 'gatsby';
// import './post.css';
import Layout from '../../components/layout';

const IndexPage = (props) => {
	const postList = props.data.allMarkdownRemark;
	return (
		<Layout>
			<div className="archive container">
				{postList.edges.map(({ node }, i) => (
					<Link to={node.fields.slug} className="link">
						<div className="post-list">
							<h1 className="blog-title">{node.frontmatter.title}</h1>
							<div className="blog-entry">
								<p>{node.frontmatter.date}</p>
								<p>{node.excerpt}</p>
							</div>
						</div>
					</Link>
				))}
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
					excerpt(pruneLength: 150)
					frontmatter {
						date(formatString: "MMMM Do YYYY")
						title
					}
				}
			}
		}
	}
`;
