import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='footer_logo'>
					<h1>[ProCode]</h1>
					<p className='footer_logo_desc'>
						"<span>ProCode</span> – Innovatsion yechimlar va mukammal kod bilan kelajakni
						yarating!"
					</p>
				</div>
				<ul className='footer_list'>
					<li className='footer_list_item social_media'>
						<h2 className='footer_list_heading social_media_heading'>
						Ijtimoiy tarmoqlar va Messengerlar
						</h2>
						<span className='social_wrapper'>
							<a
								target='_blank'
								className='telegram'
								href='https://t.me/adxam_22'
							>
								<i class='fa-brands fa-telegram'></i>
							</a>
							<a
								target='_blank'
								className='instagram'
								href='https://www.instagram.com/adham_2204/'
							>
								<i class='fa-brands fa-instagram'></i>
							</a>
							<a
								target='_blank'
								className='whatsapp'
								href='https://wa.me/998919602240'
							>
								<i class='fa-brands fa-whatsapp'></i>
							</a>
							<a className='email' target='_blank' href='mailto:adhammeyliyev8@gmail.com'>
								<i class='fa-regular fa-envelope'></i>
							</a>
						</span>
					</li>

					<li className='footer_list_item'>
						<h2 className='footer_list_heading'>Pages</h2>
						<a href='#home' title='Home' >
							<Link to='/' >Bosh sahifa</Link>
						</a>
						<a href='#about'  title='About' >
							<Link to='/about' >Biz haqimizda</Link>
						</a>
						<a href='#courses' title='Courses' >
							<Link to='/courses'>Kurslar</Link>
						</a>
						<a href='#blog' title='Blog'>
							<Link to='/blog'>Blog</Link>
						</a>
					</li>
				</ul>
			</div>

			<div className='footer_info'>
				<ul>
					<li>
						<h2>Email</h2>
						<a target='_blank' href='mailto:adhammeyliyev8@gamil.com'>
							adhammeyliyev8@gamil.com
						</a>
					</li>

					<li>
						<h2>Telefon</h2>
						<a  href='tel:+998919602240'>+998 91 960 22 40</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
