import React from 'react';
import { Link, graphql } from 'gatsby';
import RecentPosts from '../pages/recentPosts';

const Details = (props) => {
	return (
		<div className="container main">
			<div className="row">
				<div className="skills col-sm-12 col-md-7">
					<div className="card">
						<div className="card-body">
							<h3 className="card-title">Skills</h3>
							<h4>Web Technologies:</h4>
							<p className="card-text">React.js, Redux, JavaScript, HTML, CSS, Sass, jQuery, Bootstrap</p>
							<h4>Back End:</h4>
							<p className="card-text">
								Azure AD, Ruby, Ruby on Rails, RESTful API, OAuth, MongoDB, Express.js, Node.js
							</p>
							<h4>Project Tools:</h4>
							<p className="card-text">
								Azure DevOps, Travis-CI, Heroku, Git, Github, Gitlab, VSC, Jest, Enzyme, Agile, npm
							</p>
						</div>
					</div>
				</div>
				<div className="contact col-sm-12 col-md-5">
					<div className="card">
						<div className="card-body">
							<h3 className="card-title">Get In Touch</h3>
							<p className="card-text">
								<i className="fa fa-envelope" aria-hidden="true" />
								<a href="mailto:cndragn@gmail.com">cndragn@gmail.com</a>
							</p>
							<p className="card-text">
								<i className="fa fa-phone" aria-hidden="true" />
								<a href="tel:305-432-4789">305-432-4789</a>
							</p>
						</div>
					</div>
					<div className="card">
						<div className="card-body">
							<h3 className="card-title">Recent Posts</h3>
							<p className="card-text" />
							<RecentPosts data={props.data} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
