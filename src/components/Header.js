import React from 'react';

const Header = () => (
	<header>
		<div className="jumbotron">
			<div className="entry-title">
				<div className="bio row mt-sm-4 mt-md-0">
					<div className="col-sm-12 col-md-4">
						<img src="images/candice-wyn.jpg" alt="Candice Wyncode Academy" />
					</div>
					<div className="col-sm-12 col-md-8 text-sm-center text-md-left">
						<h3>Hello, My name is Candice!</h3>
						<p className="lead">
							I am a Full-Stack Developer, based in Miami, FL, who is devoted to combining the art of
							design with functional programming.
						</p>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
