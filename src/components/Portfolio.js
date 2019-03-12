import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Portfolio = () => (
	<Container>
		<Row className="projects">
			<Col md="12">
				<h2>Recent Projects</h2>
			</Col>
			<Col className="site" sm="12" md="6" lg="4">
				Image
				<h3>Idea Board</h3>
				<p>React | Ruby on Rails | API | Bootstrap</p>
			</Col>
		</Row>
	</Container>
);

export default Portfolio;
