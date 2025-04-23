import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.scss'

const Card = () => {
	const [courses, SetCourses] = useState([])
	const navigate = useNavigate()
	useEffect(() => {
		axios
			.get('/public/db.json/product.json')
			.then(response => {
				SetCourses(response.data.courses)
			})
			.catch(error => {
				console.error('Xatolik yuz berdi', error)
			})
	}, [])

	const handleClick = (id) => {
		navigate(`/course/${id}`)
	}
	return (
		<div className="container">
			<div className='courses_list'>
				{courses.map((course) => (
					<div
						key={course.id}
						className='courses_card'
						onClick={() => handleClick(course.id)} // bosganda kurs sahifasiga o'tadi
					>
						<img className='card_img' src={course.image} alt={course.title} />
						<span className='card_rating'>
							<i className='fa-solid fa-star'></i>
							<p>{course.rating}</p>
						</span>
						<div className='card_bottom_wrapper'>
							<h3 className='card_title'>{course.title}</h3>
							<p className='card_subtitle'>{course.subtitle}</p>
							<span className='card_bottom'>
								<span className='card_duration'>
									<i className='fa-solid fa-clock-rotate-left'></i>
									<p>{course.duration}</p>
								</span>
								<span className='card_videos'>
									<i className='fa-regular fa-circle-play'></i>
									<p>{course.videos} ta</p>
								</span>
								<span className='card_students'>
									<i className='fa-solid fa-user-tie'></i>
									<p>{course.students}</p>
								</span>
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Card
