import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const RecentPosts = (props) => {
	const result = props.data;
	const postList = props.data.data.allMarkdownRemark;
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
