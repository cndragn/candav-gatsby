import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';

import MyDoc from './Document';

class ResumePDF extends React.Component {
	state = { url: null };

	onRender = ({ blob }) => {
		this.setState({ url: URL.createObjectURL(blob) });
	};

	render() {
		return (
			<div>
				Download your PDF here:
				<PDFDownloadLink document={<MyDoc />} fileName="DavidsonCandice-Resume.pdf">
					{({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download!')}
				</PDFDownloadLink>
			</div>
		);
	}
}

export default ResumePDF;
