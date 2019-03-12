import React from 'react';
import Project from './Project';

import clickiton from '../images/portfolio/clickiton.png';
import feedback from '../images/portfolio/feedback.png';
import ideaboard from '../images/portfolio/ideaboard.png';
import memori from '../images/portfolio/memori.png';
import brandi from '../images/portfolio/brandi-mockup.png';
import calculator from '../images/portfolio/calculator.png';

const Portfolio = () => (
	<div className="container">
		<div className="row projects">
			<div className="col-md-12">
				<h3>Recent Projects</h3>
			</div>
			<Project
				image={clickiton}
				tech="React.js | Materialize | Sass | TravisCI CI/CD"
				demo="http://clickiton.surge.sh/"
				github="https://github.com/cndragn/clickiton"
			/>
			<Project
				image={feedback}
				tech="React.js | Redux | Express | Mongo | Node | OAuth"
				demo="https://feedback-server-cnd.herokuapp.com/"
				github="https://github.com/cndragn/feedback-server"
			/>
			<Project
				image={ideaboard}
				tech="React | Ruby on Rails | API | Bootstrap"
				demo="http://ideaboard-react.surge.sh/"
				github="https://github.com/cndragn/ideaboard-react"
			/>
			<Project
				image={brandi}
				tech="React.js | Bootstrap | Sass | TravisCI CI/CD"
				demo="http://brandi-react.surge.sh/"
				github="https://github.com/cndragn/brandi-mockup"
			/>
			<Project
				image={memori}
				tech="Ruby on Rails | API | OmniAuth | Materialize"
				demo="https://memori-wyn.herokuapp.com/"
				github="https://github.com/cndragn/memori-app"
			/>
			<Project
				image={calculator}
				tech="HTML | CSS | JavaScript | jQuery"
				demo="http://candav-jscalc.surge.sh/"
				github="https://github.com/cndragn/javascript-calculator"
			/>
		</div>
	</div>
);

export default Portfolio;
