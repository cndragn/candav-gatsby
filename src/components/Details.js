import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Details = () => (
	<Container>
		<Row>
			<Col sm="12" md="7">
				<h2>Skills</h2>
				<h3>Front End:</h3>
				<p>HTML, CSS, Sass, JavaScript, ReactJS, jQuery, Bootstrap</p>
				<h3>Back End:</h3>
				<p>Ruby, Ruby on Rails, RESTful API</p>
				<h3>Project Management:</h3>
				<p>NPM, Webpack, Git, Agile, TDD</p>
			</Col>
			<Col sm="12" md="5">
				<h2>Get In Touch</h2>
				<p>
					<i class="fa fa-envelope" aria-hidden="true" />
					<a href="https://web.archive.org/web/20180813064807/mailto:cndragn@gmail.com">cndragn@gmail.com</a>
				</p>
				<p>
					<i class="fa fa-phone" aria-hidden="true" />
					<a href="https://web.archive.org/web/20180813064807/tel:305-432-4789">305-432-4789</a>
				</p>
			</Col>
		</Row>
	</Container>
);

export default Details;
