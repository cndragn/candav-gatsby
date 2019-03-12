import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import '../css/404.css';

import nope from '../images/nope.jpeg';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<h1 className="uhoh">Uh Oh!</h1>
		<div className="notfound">
			<h2>
				<Link to="/">Return To Home</Link>
			</h2>
			<h2>Looking for my resume?</h2>
			<p>
				<a
					href="https://docs.google.com/document/d/1tcSlib83Tx6imyr99TJLmGz7WTWHCgDRT1pJ3sp3Vs0/edit?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
				>
					Here you go!
				</a>
			</p>
			<h2>Trying to find my blog?</h2>
			<p>I'll have it back up by March 17, 2019</p>
			<h2>Need freelance work?</h2>
			<img src={nope} alt="Cute nope" />
		</div>
	</Layout>
);

export default NotFoundPage;
