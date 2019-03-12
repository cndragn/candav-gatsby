import React from 'react';
import Project from './Project';

import ideaboard from '../images/portfolio/ideaboard.png';

const Portfolio = () => (
	<div className="container">
		<div className="row projects">
			<div className="col-md-12">
				<h3>Recent Projects</h3>
				<Project
					image={ideaboard}
					tech="React | Ruby on Rails | API | Bootstrap"
					demo="http://ideaboard-react.surge.sh/"
					github="https://github.com/cndragn/ideaboard-react"
				/>
			</div>
		</div>
	</div>
);

export default Portfolio;
