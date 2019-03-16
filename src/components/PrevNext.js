import React from 'react';
const PrevNext = (props) => {
	const { prev, next } = props;

	return (
		<div className="prevnext row justify-content-between">
			<p className="col-sm-12 col-md-6">
				{prev && (
					<a href={prev.fields.slug}>
						<i class="fas fa-chevron-circle-left" /> {prev.frontmatter.title}
					</a>
				)}
			</p>

			<p className="col-sm-12 col-md-6 text-right">
				{next && (
					<a href={next.fields.slug}>
						{next.frontmatter.title} <i class="fas fa-chevron-circle-right" />
					</a>
				)}
			</p>
		</div>
	);
};

export default PrevNext;
