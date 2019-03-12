import React from 'react';

const Project = ({ image, tech, demo, github }) => (
	<div class="pg col-sm-12 col-md-6 col-lg-4 mb-20">
		<a href={demo} target="_blank">
			<img src={image} alt="" />
		</a>
		<figcaption>
			<h4>{tech}</h4>
			<a href={demo} target="_blank">
				Demo
			</a>{' '}
			|{' '}
			<a href={github} target="_blank">
				Github
			</a>
		</figcaption>
	</div>
);

export default Project;
