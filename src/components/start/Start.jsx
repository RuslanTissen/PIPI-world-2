import React from 'react'
import "./Start.scss"
import Introduction from './introduction/Introduction'  
import About from '../about/About.jsx';
// import ByServices from './byServices/ByServices.jsx';
// import Technologies from './technologies/Technologies.jsx';
// import Statement from './statement/Statement.jsx';
// import Location from './locaion/Location.jsx';

function Start() {
	return (
		<div className='starts'>
			<Introduction />

			<About />

			{/* <ByServices /> */}

			{/* <Technologies /> */}

			{/* <Statement /> */}

			{/* <Location /> */}

		</div>
	)
}

export default Start


