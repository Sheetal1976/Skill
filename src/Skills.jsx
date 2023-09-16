import React, { useEffect, useState } from "react";
import "./Skills.scss";
import Intro from "./Intro";

const Skill = ({ name, x, y }) => {
	const [animated, setAnimated] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setAnimated(true);
		}, 500);
	}, []);

	const style = {
		transform: animated ? `translate(${x}, ${y})` : "translate(0, 0)",
		transition: "transform 1s ease",
	};

	return (
		<div className={`skill ${animated ? "visible" : ""}`} style={style}>
			{name}
		</div>
	);
};

const Skills = () => {
	const [hideIntro, setHideIntro] = useState(false);

	useEffect(() => {
		const introTimer = setTimeout(() => {
			setHideIntro(true);
		}, 8000);

		return () => {
			clearTimeout(introTimer);
		};
	}, []);

	const skillsStyle = {
		opacity: hideIntro ? 1 : 0,
		transition: "opacity 1s ease",
	};

	return (
		<>
			{!hideIntro ? (
				<Intro />
			) : (
				<>
					<h2 className="head">Skills</h2>
					<div className="pattern" style={skillsStyle}>
						<div className="web">
							<Skill name="Web" x="0" y="0" />
						</div>
						<Skill name="CSS" x="5vw" y="-10vw" />
						<Skill name="React" x="-3vw" y="10vw" />
						<Skill name="HTML" x="-20vw" y="2vw" />
						<Skill name="javaScript" x="20vw" y="6vw" />
						<Skill name="Tailwind CSS" x="-25vw" y="-16vw" />
						<Skill name="MongoDB" x="18vw" y="-15vw" />
						<Skill name="NodeJS" x="32vw" y="-5vw" />
						<Skill name="Firebase" x="-25vw" y="-5vw" />
					</div>
				</>
			)}
		</>
	);
};

export default Skills;
