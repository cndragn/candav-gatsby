import React from 'react';
import logo from '../images/candicedavidsonlogo.png';

const Footer = () => (
	<footer>
		<p className="brand-name">
			<img src={logo} className="img-fluid" alt="Candice Davidson" />
		</p>
		<p>© 2019 Candice Davidson</p>
	</footer>
);

export default Footer;
