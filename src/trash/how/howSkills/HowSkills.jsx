import React, { useContext } from 'react'
import "./HowSkills.scss"
import trans from '../../../components/Translate'
import { Context } from '../../../components/Context'

function HowSkills() {
	const { lang, setLang } = useContext(Context)
	return (
		<div className='howSkills'>
			<div className="howSkills__container">
				<div className="howSkills__container__text__box">
					<h2>{trans[lang].howInAddition} <mark>{trans[lang].howCommunication} </mark>  {trans[lang].howAnd}  <mark>{trans[lang].howAdaptability} </mark>  {trans[lang].howAmong} </h2>
				</div>
			</div>
		</div>
	)
}

export default HowSkills