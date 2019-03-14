import React from 'react';
const PrevNext = (props) => {
	const { prev, next } = props;

	return (
		<div className="prevnext">
			<p>{prev && <a href={prev.fields.slug}>Previous post: {prev.frontmatter.title}</a>}</p>

			<p>{next && <a href={next.fields.slug}>Next post: {next.frontmatter.title}</a>}</p>
		</div>
	);
};

export default PrevNext;
