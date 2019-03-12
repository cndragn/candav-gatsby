import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SEO from '../components/seo';
import Header from '../components/Header';
import Social from '../components/Social';
import Details from '../components/Details';

const IndexPage = () => (
	<div>
		<SEO title="Software Developer" keywords={[ `gatsby`, `application`, `react` ]} />
		<Header />
		<Social />
		<Details />
	</div>
);

export default IndexPage;
