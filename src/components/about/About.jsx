import React from 'react'
import './About.scss'

const About = () => {
	return (
		<>
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
		</>
	)
}

export default About