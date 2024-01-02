import React, { useRef } from 'react'
import "./Introduction.scss"
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { SiGmail, SiUpwork} from "react-icons/si";
import { Context } from '../../Context'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import trans from '../../Translate.js';

function Introduction() {
	const { lang, setLang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className="introduction__container">
			<div className="introduction__container--social-media">
				<a className='introduction__container--social-media__links' href='https://wa.me/14155797059' target='_blank'><FaWhatsapp /></a>
				<NavLink className='introduction__container--social-media__links' to="Contact" onClick={scrollToTheTop}><SiGmail /></NavLink>
				<a className='introduction__container--social-media__links' href='https://www.instagram.com/pipitosti/' target='_blank'><FaInstagram /></a>
				<a className='introduction__container--social-media__links' href='https://www.upwork.com/freelancers/~01fe4cfc87ce82d6a8' target='_blank'><SiUpwork /></a>
			</div>
			<p className='introduction__container--moto'>Maximize Your Full Potential.</p>
		</div>
	)
}

export default Introduction