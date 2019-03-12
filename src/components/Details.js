import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Details = () => (
	<div className="container main">
		<div className="row">
			<div className="skills col-sm-12 col-md-7">
				<div className="card">
					<div className="card-body">
						<h3 className="card-title">Skills</h3>
						<h4>Front End:</h4>
						<p className="card-text">HTML, CSS, Sass, JavaScript, ReactJS, jQuery, Bootstrap</p>
						<h4>Back End:</h4>
						<p className="card-text">Ruby, Ruby on Rails, RESTful API</p>
						<h4>Project Management:</h4>
						<p className="card-text">NPM, Webpack, Git, Agile, TDD</p>
					</div>
				</div>
			</div>
			<div className="contact col-sm-12 col-md-5">
				<div className="card">
					<div className="card-body">
						<h3 className="card-title">Get In Touch</h3>
						<p className="card-text">
							<i className="fa fa-envelope" aria-hidden="true" />
							<a href="https://web.archive.org/web/20180813064807/mailto:cndragn@gmail.com">
								cndragn@gmail.com
							</a>
						</p>
						<p className="card-text">
							<i className="fa fa-phone" aria-hidden="true" />
							<a href="https://web.archive.org/web/20180813064807/tel:305-432-4789">305-432-4789</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Details;
