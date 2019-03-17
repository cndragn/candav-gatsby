import React from 'react';
import { Link, graphql } from 'gatsby';

const RecentPosts = (props) => {
	const postList = props.data.allMarkdownRemark;
	return (
		<div>
			{postList.edges.slice(0, 3).map(({ node }, i) => (
				<p key={i}>
					{node.frontmatter.date}:
					<Link to={node.fields.slug}>{node.frontmatter.title}</Link>
				</p>
			))}
		</div>
	);
};
export default RecentPosts;

export const postsQuery = graphql`
	query recentPostsQuery {
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
