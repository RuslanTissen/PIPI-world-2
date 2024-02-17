import React from 'react'
import "./Success.scss"
// import { useState } from 'react'


function Success() {
	// const [show, setShow] = useState(false)
	// const [active, setActive] = useState(true)


	// function eddText() {
	// 	setShow(!show)
	// 	setActive(!active)
	// }

	// const arrowDown = "↓"
	// const arrowUp = "^"

	return (
		<div className='success'>
			<div className="success__cont">
				<div className="success__cont--1">
					<h4>SUCCESS MINDSET</h4>
					<div className="price_box"><span>$</span> 800</div>
					<h6>12 Week Intensive Program</h6>
					<p>Valid for 12 weeks</p>
					<button className='slct__bnt'>SELECT</button>
				</div>

				{/* <div className="tic" onClick={() => eddText()}>
					{active ? <button>arrowDown</button> : <button>ArrowUp</button>}
				</div> */}

				{/* {show && */}
				 <div className="success__cont--2">

					<ul>
						<li>Build Visualization and Goal-Setting Techniques</li>
						<li>Narrow Your Focus</li>
						<li>Gain Access to 10 Success Modules</li>
						<li>Improve Motivation and Team-Building Skills</li>
						<li>Conquer Anxiety</li>
						<li>Learn the Art of Rehabilitation</li>
					</ul>
				</div>
				{/* } */}

			</div>
		</div>
	)
}

export default Success