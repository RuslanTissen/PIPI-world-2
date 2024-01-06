import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaInstagram, FaArrowRight } from 'react-icons/fa'
import { SiGmail, SiUpwork } from "react-icons/si";
import { IoDiamondSharp } from "react-icons/io5";
// import trans from '../Translate.js';


import trans from '../Translate.js';
import { Context } from '../Context'

import "./Footer.scss"

function Footer() {
	const { lang } = useContext(Context)

	const scrollToTheTop = () => {
		window.scroll(0, 0)
	}

	return (
		<div className='footer'>
			<div className="footer__operation footer__operation--block">
				<h2>HOURS OF OPERATION </h2>

				<p>Mon-Thu: 9AM to 8PM</p>
				<p>Friday: 9AM to 3PM</p>
				<p>Sat-Sun: Closed</p>

				{/* <div className="footer__operation"> */}
				{/* <h2>{trans[lang].footerServices}</h2>
						<NavLink to="SoftwareDevelopment" onClick={scrollToTheTop}>{trans[lang].footerSoftware}</NavLink>
						<NavLink to="E_Commerce" onClick={scrollToTheTop}>{trans[lang].e_commerceDevelopment}</NavLink>
						<NavLink to="CloudHosting" onClick={scrollToTheTop}>{trans[lang].footerCloud} </NavLink>
						<NavLink to="WebDevelopment" onClick={scrollToTheTop}>{trans[lang].footerWeb}</NavLink>
						<NavLink to="MobileDevelopment" onClick={scrollToTheTop}>{trans[lang].footerMobile}</NavLink>
						<NavLink to="UX_UI" onClick={scrollToTheTop}>UX/UI</NavLink> */}
				{/* </div> */}
			</div>

			<div className="footer__contact footer__operation--block">
				<h2>CONTACT ME</h2>

				<p>500 Terry Francine Street</p>
				<p>San Francisco, CA 94158</p>
				<p className='empty_line'> - </p>
				<p>Mail: info@mysite.com</p>
				<p>Tel: 123-456-7890</p>

				{/* <NavLink to="Angular" onClick={scrollToTheTop}>Angular</NavLink>
				<NavLink to="Vue" onClick={scrollToTheTop}>Vue.js</NavLink>
				<NavLink to="React_Native" onClick={scrollToTheTop}>React Native</NavLink>
				<NavLink to="JS" onClick={scrollToTheTop}>JavaScript</NavLink>
				<NavLink to="AWS" onClick={scrollToTheTop}>AWS</NavLink>
				<NavLink to="Microsoft_Azure" onClick={scrollToTheTop}>Microsoft Azure</NavLink>
				<NavLink to="Figma" onClick={scrollToTheTop}>Figma</NavLink>
				<NavLink to="Python" onClick={scrollToTheTop}>Python</NavLink>
				<NavLink to="MUI" onClick={scrollToTheTop}>Material-UI</NavLink>
				<NavLink to="Swift" onClick={scrollToTheTop}>Swift</NavLink>
				<NavLink to="MySQL" onClick={scrollToTheTop}>MySQL</NavLink>
				<NavLink to="CPlusPlus" onClick={scrollToTheTop}>C++</NavLink> */}
			</div>
			<div className="footer__menu footer__operation--block">
				<h2>MENU</h2>

				<p><IoDiamondSharp /> About</p>
				<p><IoDiamondSharp /> Services</p>
				<p><IoDiamondSharp /> Plans</p>
				<p><IoDiamondSharp /> Online Programs</p>
				<p><IoDiamondSharp /> Contact</p>

				<NavLink className="footer__menu--link-to-contact" to="Contact" onClick={scrollToTheTop}>{trans[lang].footerContact}</NavLink>

				{/* <NavLink to="services" onClick={scrollToTheTop}>{trans[lang].services}</NavLink>
				<NavLink to="How" onClick={scrollToTheTop}>{trans[lang].how}</NavLink>
				<NavLink to="Careers" onClick={scrollToTheTop}>{trans[lang].footerCarrers}</NavLink>
				<NavLink to='About' onClick={scrollToTheTop}>{trans[lang].footerAbout}</NavLink>
				<NavLink to="Contact" onClick={scrollToTheTop}>{trans[lang].footerContact}</NavLink> */}
			</div>

			<div className="footer__logo footer__operation--block">
				<p2 className='logo-box'><NavLink className='logo-box' to="*" onClick={scrollToTheTop}><span>PIPI` <IoDiamondSharp /></span>SPORTS  <span />PHILOSOPHY <span /></NavLink> </p2>

				<div className="footer__logo--social-container">
					<a className='footer__logo--social' href='https://wa.me/14155797059' target='_blank'><FaWhatsapp /></a>
					<NavLink className='footer__logo--social' to="Contact" onClick={scrollToTheTop}><SiGmail /></NavLink>
					<a className='footer__logo--social' href='https://www.instagram.com/pipitosti/' target='_blank'><FaInstagram /></a>
					<a className='footer__logo--social' href='https://www.upwork.com/freelancers/~01fe4cfc87ce82d6a8' target='_blank'><SiUpwork /></a>
				</div>

				<p>© 2035 by Apex. Powered </p>
				<p>and secured by Wix</p>

				{/* <div className="footer__container--section-2-logos">
					<NavLink to="*" onClick={scrollToTheTop}> PIPI sports Psychology </NavLink>
					<a href='https://www.instagram.com/tissentechnologies/?igshid=MzRlODBiNWFlZA%3D%3D/' target='_blank'><FaInstagram /></a>
					<a href='https://twitter.com/tissentech' target='_blank'><FaTwitter /></a>
					<a href='https://www.facebook.com/profile.php?id=61550480973075' target='_blank'><FaFacebookF /></a>
					<a href='https://www.linkedin.com/company/tissen/about/?viewAsMember=true' target='_blank'><BsLinkedin /></a>
				</div>
				<div className="footer__container--section-2-email">
					<h3>{trans[lang].footerEmail}</h3>
					<a href="mailto:info@tissen.tech">info@tissen.tech</a>
				</div>
				<div className="footer__container--section-2-phone">
					<h3>{trans[lang].footerPhone}</h3>
					<p>AR (+54) 11-5763-9301 </p>
					<p>DE (+49) 176-8315-7254 </p>
				</div> */}
			</div>
		</div>
	)
}

export default Footer