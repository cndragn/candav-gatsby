import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Header = () => (
	<header>
		<Jumbotron>
			<Container>
				<Row>
					<Col sm="12" md="4">
						Image
					</Col>
					<Col sm="12" md="8">
						<h3>Hello, My name is Candice!</h3>
						<p class="lead">
							I am a Full-Stack Developer, based in Miami, FL, who is devoted to combining the art of
							design with functional programming.
						</p>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	</header>
);

export default Header;
