import React from 'react';
import myPic from '../images/candice-wyn.jpg';

const Header = () => (
	<header>
		<div className="jumbotron">
			<div className="entry-title">
				<div className="bio row mt-sm-4 mt-md-0">
					<div className="col-sm-12 col-md-4">
						<img src={myPic} alt="Candice Profile Photo" />
					</div>
					<div className="col-sm-12 col-md-8 text-sm-center text-md-left">
						<h3>Hello, My name is Candice!</h3>
						<p className="lead">
							I am a Software Developer, based in Miami, FL, who is devoted to combining the art of design
							with functional programming.
						</p>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
