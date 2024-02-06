import React from 'react'
import "./MeetPipi.scss"

function MeetPipi() {
	return (
		<div className='meet-pipi__container'>
			<div className="meet-pipi__container-title-box">
				<p className="meet-pipi__container-title-box--title">meet the team</p>
				<div className="meet-pipi__container-title-box--underline-dig"></div>
				<div className="meet-pipi__container-title-box--underline-thin"></div>
			</div>

			<div className="meet-pipi__container-1">
				<div className="meet-pipi__container-1--img-box">				</div>
				
				<div className="meet-pipi__container-1--text-box">
					<h3>Coach Priscyla Tosti </h3>
					<h6>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </h6>
					<button></button>
				</div>
			</div>

			<div className="meet-pipi__container-2">
				<div className="meet-pipi__container-2--img">
					<div className="meet-pipi__container-2--img--container">					</div>
				</div>
				<div className="meet-pipi__container-2--text">
					<h3>IT Ruslan Tissen </h3>
					<h6>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </h6>
					<button></button>
				</div>
			</div>

		</div>
	)
}

export default MeetPipi