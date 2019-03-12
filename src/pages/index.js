import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'gatsby';

import SEO from '../components/seo';
import Header from '../components/Header';

const IndexPage = () => (
	<div>
		<SEO title="Software Developer" keywords={[ `gatsby`, `application`, `react` ]} />
		<Header />
		Stuff
	</div>
);

export default IndexPage;
