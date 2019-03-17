import React from 'react';

const Share = (props) => {
	const twitter = `https://twitter.com/intent/tweet?url=${props.url +
		props.pathname}&text=${props.title} by @CandiceDavidson`;

	const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url + props.pathname}`;

	return (
		<div className="share">
			Share:
			<a className="facebook" href={fb} target="blank">
				<i class="fab fa-facebook-square" />
			</a>
			<a className="twitter" href={twitter} target="blank">
				<i class="fab fa-twitter-square" />
			</a>
		</div>
	);
};

export default Share;
