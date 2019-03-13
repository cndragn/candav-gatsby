import React from 'react';

import MyDoc from '../components/resume/Document';
// import ResumePDF from '../components/resume/ResumePDF';

const Output = () => (
	<div style={{ padding: 1 }}>
		{/*<div>
			<ResumePDF />
        </div>*/}
		<div className="resume-output">
			<MyDoc />
		</div>
	</div>
);

export default Output;

// https://github.com/wojtekmaj/react-pdf/wiki/Recipes
// https://pspdfkit.com/blog/2018/open-pdf-in-react/
// https://react-pdf.org/advanced
// https://github.com/diegomura/react-pdf/tree/master/examples/resume/
// https://andrewsempere.org/blog/2018/10/30/react-render-pdf.html
// https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
