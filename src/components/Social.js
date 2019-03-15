import React from 'react';
import { Link } from 'gatsby';

const Social = () => (
	<div className="social">
		<ul className="nav">
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
	</div>
);

export default Social;
