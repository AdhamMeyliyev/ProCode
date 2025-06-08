import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Header.scss';

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("user"); // foydalanuvchini o‘chirish
		toast.success("Muvaffaqiyatli chiqdingiz!"); // xabar
		navigate("/login"); // login sahifasiga o'tkazish
	};

	return (
		<>
			<header className='header'>
				<div className='container'>
					<a href="/">
					<img
						className='header_logo'
						src='/public/logos/logopro.png'
						alt='logo'
					/></a>
					<div className='header_right'>
						<nav className='navbar'>
							<ul className='nav_list'>
								<li className={`nav_list_item ${location.pathname === '/' ? 'active' : ''}`}>
									<Link to='/'>Bosh sahifa</Link>
								</li>
								<li className={`nav_list_item ${location.pathname === '/about' ? 'active' : ''}`}>
									<Link to='/about'>Biz haqimizda</Link>
								</li>
								<li className={`nav_list_item ${location.pathname === '/courses' ? 'active' : ''}`}>
									<Link to='/courses'>Kurslar</Link>
								</li>
								<li className={`nav_list_item ${location.pathname === '/blog' ? 'active' : ''}`}>
									<Link to='/blog'>Blog</Link>
								</li>
								<li className={`nav_list_item ${/^\/course(\/\d+)?$/.test(location.pathname) ? 'active' : ''}`}>
									<Link to='/course'>Kurs</Link>
								</li>
							</ul>
						</nav>

						{/* 🔻 Logout button (a emas, button ishlatiladi) */}
						<button
							onClick={handleLogout}
							className='btn-flip'
							data-back='Bosing!'
							data-front='LogOut'
						></button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
