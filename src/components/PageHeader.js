import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import '../css/header.css';

const Header = ({ siteTitle }) => (
	<header className="page row">
		<Link className="logo col-sm-12" to="/">
			{siteTitle}
		</Link>
		<nav className="col-sm-12">
			<Link to="/">Return Home</Link>
		</nav>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
