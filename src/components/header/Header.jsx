import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.scss'

const Header = () => {
	const location = useLocation() // <-- useLocation hook ni ishlatish

	return (
		<>
			<header className='header'>
				<div className='container'>
					<img
						className='header_logo'
						src='/public/logos/logopro.png'
						alt='logo'
					/>
					<div className='header_right'>
						<nav className='navbar'>
							<ul className='nav_list'>
								<li
									className={`nav_list_item ${
										location.pathname === '/' ? 'active' : ''
									}`}
								>
									<Link to='/'>Bosh sahifa</Link>
								</li>
								<li
									className={`nav_list_item ${
										location.pathname === '/about' ? 'active' : ''
									}`}
								>
									<Link to='about'>Biz haqimizda</Link>
								</li>
								<li
									className={`nav_list_item ${
										location.pathname === '/courses' ? 'active' : ''
									}`}
								>
									<Link to='/courses'>Kurslar</Link>
								</li>
								<li
									className={`nav_list_item ${
										location.pathname === '/blog' ? 'active' : ''
									}`}
								>
									<Link to='/blog'>Blog</Link>
								</li>
								<li
									className={`nav_list_item ${
										/^\/course(\/\d+)?$/.test(location.pathname) ? 'active' : ''
									}`}
								>
									<Link to='/course'>Kurs</Link>
								</li>
							</ul>
						</nav>

						<a
							href='#'
							className='btn-flip'
							data-back='Bosing!'
							data-front='Kirish'
						></a>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
