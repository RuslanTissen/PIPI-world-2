import React, { useContext } from 'react'
import "./HowPicture.scss"
import trans from '../../../components/Translate'
import { Context } from '../../../components/Context'

function HowPicture() {
	const { lang } = useContext(Context)

	return (
		<div className='how__picture'>
			<div className="how__picture--container">
				<h2 className='title__picture--include'>{trans[lang].howTitle}</h2>
			</div>
		</div>
	)
}

export default HowPicture