import React from 'react';
import '../css/style.css';
import '../css/portfolio.css';

import SEO from '../components/seo';
import Header from '../components/Header';
import Social from '../components/Social';
import Details from '../components/Details';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const IndexPage = () => (
	<div>
		<SEO title="Software Developer" keywords={[ `gatsby`, `application`, `react` ]} />
		<Header />
		<Social />
		<Details />
		<Portfolio />
		<Footer />
	</div>
);

export default IndexPage;
