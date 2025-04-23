import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'
import './Home.scss'

const HomePage = () => {
	return (
		<>
			<div id='home' className='hero'>
				<div className='container'>
					<div className='hero_left'>
						<h1 className='hero_heading'>
							Orzu qil va amalga oshir <span>ProCode</span> bilan
						</h1>
						<p className='hero_desc'>
							<span>ProCode</span> – bu onlayn tarzda bepul kurslar va
							treninglar taqdim etuvchi platforma bo‘lib, sizga texnologiya
							sohasida o‘z maqsadlaringizga erishishda yordam beradi.
						</p>
						<Link to='/courses'>
						<button className='hero_btn'>
							Kurslarga O'tish
						</button>
						</Link>
					</div>
					<div className='hero_right'>
						<img
							className='hero_img'
							src='/public/images/hero_img.png'
							alt='hero img'
						/>
					</div>
				</div>
			</div>

			<div id='about' className='about'>
				<div className='container'>
					<div className='about_left'>
						<h2 className='about_heading1'>Biz haqimizda!</h2>
						<h2 className='about_heading2'>
							<span>ProCode</span> – dasturlashni o‘rganish uchun bepul
							platforma
						</h2>
						<p className='about_desc'>
							<span>ProCode</span> – dasturlashga qiziquvchilar va mutaxassislar
							uchun bepul ta’lim beruvchi platforma bo‘lib, zamonaviy dasturlash
							tillarini mukammal o‘rganish imkoniyatini taqdim etadi. Bizning
							maqsadimiz – har bir o‘quvchiga dasturlash asoslarini o‘rganish va
							ularni amaliy qo‘llash imkoniyatini yaratish. Kelajakda ushbu
							platforma dasturchilarni tayyorlashda muhim ahamiyat kasb etishi
							va IT sohasining rivojlanishiga o‘z hissasini qo‘shishi
							kutilmoqda.
						</p>
					</div>
					<div className='about_right'>
						<img
							className='about_img'
							src='/public/images/about_img.png'
							alt='about img'
						/>
					</div>
				</div>
			</div>

			<div className='cours_recomen'>
				<div className='container'>
					<div className='top'>
						<h2 className='top_heading'>Kurslar tavsiya qilish</h2>
						<Link to='/courses'>
						<button className='top_btn'>
							Kurslarga O'tish
						</button>
						</Link>
					</div>

					<div className='hr'></div>
				</div>
				<Card />
			</div>
		</>
	)
}

export default HomePage
