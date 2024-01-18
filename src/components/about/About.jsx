import React from 'react'
import "./About.scss"

function About() {
	return (
		<div className="about__container">

			<div className="about__container--text-container">
				<p className="about__container--text-container__title">ABOUT PIPI</p>
				<div className="about__container--text-container__underline-dig"></div>
				<div className="about__container--text-container__underline-thin"></div>
				<div className="about__container--text-container__text-about">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</div>
			</div>

			<div className="about__container--image-container">
				<div className="about__container--image-container-img">
					
				</div>

			</div>
		</div>
	)
}

export default About