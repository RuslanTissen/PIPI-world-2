import React, { useRef } from 'react'
import "./Introduction.scss"
// import trans from '../../Translate' 
import { Context } from '../../Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import firstImg from "../../../images/introduction.png"

function Introduction() {
	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className="introduction__container">
			<h1>Maximize Your Full Potential.</h1>
		</div>
	)
}

export default Introduction