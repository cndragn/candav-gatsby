import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '../css/header.css';

const Header = ({ siteTitle }) => (
	<header className="page row">
		<Link className="logo col-sm-12 col-md-6" to="/">
			{siteTitle}
		</Link>
		<ul className="col-sm-12 col-md-6 nav">
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/candicedavidson/" target="_blank" rel="noopener noreferrer">
					LinkedIn
				</a>
			</li>
			<li>
				<a href="https://github.com/cndragn" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
			<li>
				<a
					href="https://docs.google.com/document/d/1tcSlib83Tx6imyr99TJLmGz7WTWHCgDRT1pJ3sp3Vs0/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					Resume
				</a>
			</li>
		</ul>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defalitProps = {
	siteTitle: ``
};

export default Header;
