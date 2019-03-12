import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SEO from '../components/seo';
import Header from '../components/Header';

const IndexPage = () => (
	<div>
		<SEO title="Software Developer" keywords={[ `gatsby`, `application`, `react` ]} />
		<Header />
	</div>
);

export default IndexPage;
