import React from 'react';
import resume from '../download/DavidsonCandice-Resume.pdf';

const Social = () => (
	<div className="social">
		<ul>
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
				<a href={resume} target="_blank" rel="noopener noreferrer">
					Resume
				</a>
			</li>
		</ul>
	</div>
);

export default Social;
