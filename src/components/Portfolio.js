import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Portfolio = () => (
	<div class="row projects">
		<div class="col-md-12">
			<h3>Recent Projects</h3>
		</div>

		<div class="site col-sm-12 col-md-6 col-lg-4 mb-20">
			<img src="images/ideaboard.png" alt="" />
			<figcaption>
				<i class="fab fa-github" />
				<h4>Idea Board</h4>
				<h2>React | Ruby on Rails | API | Bootstrap</h2>
			</figcaption>
			<a href="https://github.com/cndragn/ideaboard-react" target="_blank" />
		</div>
	</div>
);

export default Portfolio;
