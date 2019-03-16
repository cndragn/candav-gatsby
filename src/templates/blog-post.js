import React from 'react';
import Layout from '../components/layout';
import PrevNext from '../components/PrevNext';
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import { graphql } from 'gatsby';
import '../css/blog.css';

function BlogPost({ data, location, pageContext }) {
	const post = data.markdownRemark;
	const url = data.site.siteMetadata.siteUrl;
	const { title, description, date } = post.frontmatter;
	const thumbnail = post.frontmatter.image.childImageSharp.resize.src;
	const { prev, next } = pageContext;
	return (
		<Layout>
			<Metatags
				title={title}
				description={description}
				thumbnail={url + thumbnail}
				url={url}
				pathname={location.pathname}
			/>
			<div>
				<Img fluid={post.frontmatter.image.childImageSharp.fluid} />
				<div className="container">
					<h1 className="blog-title">{title}</h1>
					<h2 className="blog-date">{date}</h2>
					<div className="blog-entry">
						<p className="time">Time to read: {post.timeToRead}m</p>
						<div dangerouslySetInnerHTML={{ __html: post.html }} />
						<PrevNext prev={prev && prev.node} next={next && next.node} />
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default BlogPost;

export const query = graphql`
	query PostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				description
				date(formatString: "MMMM DD, YYYY")
				image {
					childImageSharp {
						resize(width: 1900, height: 300) {
							src
						}
						fluid(maxWidth: 1900) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			timeToRead
		}
		site {
			siteMetadata {
				siteUrl
			}
		}
	}
`;
