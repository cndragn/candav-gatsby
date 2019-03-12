import React from 'react';
import '../css/style.css';
import '../css/portfolio.css';

import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../components/Header';
import Social from '../components/Social';
import Details from '../components/Details';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const IndexPage = () => (
	<div id="home">
		<SEO title="Software Developer" keywords={[ `gatsby`, `application`, `react` ]} />
		<Link to="/page-2.js">Go back to the homepage</Link>
		<Header />
		<Social />
		<Details />
		<Portfolio />
		<Footer />
	</div>
);

export default IndexPage;
