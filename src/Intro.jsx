import React, { useState, useEffect } from "react";
import "./Intro.scss";

const Intro = () => {
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setHidden(true);
		}, 8000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={`container ${hidden ? "hidden" : ""}`}>
			<div className={`cover ${hidden ? "slide-up" : ""}`}>
				<h1>Welcome to my galaxy of skills</h1>
				<p>This Web Page is purely made of SASS and REACT!!</p>
				<h3>Excited!!!!!</h3>
			</div>
		</div>
	);
};

export default Intro;
