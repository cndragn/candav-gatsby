import React from 'react';
import { Link } from 'gatsby';

const RecentPosts = (props) => {
	const postList = props.data.data.allMarkdownRemark;
	console.log(postList);
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
