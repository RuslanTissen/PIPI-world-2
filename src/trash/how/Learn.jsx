import React, { useContext } from 'react'
import "./How.scss"
import { Context } from '../../components/Context.js'
import HowPicture from './howPicture/HowPicture.jsx'
import HowSteps from './howSteps/HowSteps.jsx'
import HowGlobePicture from './howGlobePicture/HowGlobePicture.jsx'
import HowSkills from './howSkills/HowSkills.jsx'
import HowAdvantages from './howAdvantages/HowAdvantages.jsx'
import HowDecisions from './howDecisions/HowDecisions.jsx'
import trans from '../../components/Translate.js'

function How() {
	const { lang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='how'>
			<HowPicture />

			<HowSteps
				contactButton={`${trans[lang].howKnowUs}`}
			/>

			<HowGlobePicture />

			<HowSkills />

			<HowAdvantages />

			<HowDecisions />

		</div>
	)
}

export default How
