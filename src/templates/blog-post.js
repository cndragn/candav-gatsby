import React from 'react';
import Layout from '../components/layout';
import PrevNext from '../components/PrevNext';
import Img from 'gatsby-image';
import Metatags from '../components/Metatags';
import { graphql } from 'gatsby';
function BlogPost({ data, location, pageContext }) {
	const post = data.markdownRemark;
	const url = data.site.siteMetadata.siteUrl;
	const { title, description } = post.frontmatter;
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
				<h1>{title}</h1>
				<Img fluid={post.frontmatter.image.childImageSharp.fluid} />
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
				<PrevNext prev={prev && prev.node} next={next && next.node} />
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
				image {
					childImageSharp {
						resize(width: 1500, height: 1500) {
							src
						}
						fluid(maxWidth: 786) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
		site {
			siteMetadata {
				siteUrl
			}
		}
	}
`;
