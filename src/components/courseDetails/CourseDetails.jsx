import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CourseDetails.scss';

const CourseDetails = () => {
	const { id } = useParams();
	const [course, setCourse] = useState(null);
	const [loading, setLoading] = useState(true); // Yuklanish holatini kuzatish

	useEffect(() => {
		axios
			.get('/public/db.json/product.json')
			.then(response => {
				const selectedCourse = response.data.courses.find(c => c.id === Number(id));
				setCourse(selectedCourse);
				setLoading(false); // Yuklash tugadi
			})
			.catch(error => {
				console.error('Xatolik:', error);
				setLoading(false); // Xato bo'lsa ham yuklash tugaydi
			});
	}, [id]);

	if (loading) {
		// Kurs ma'lumotlari yuklanayotgan paytda, kurs mavjud emasligi holatiga o'tish
		return <div className="loading">Yuklanmoqda...</div>;
	}

	if (!course) {
		// Kurs topilmasa, "Kurs topilmadi" matni ko'rsatiladi
		return <div className="no-data">Kurs topilmadi</div>;
	}

	return (
		<>
		
		<div className="course-details container">
			<div className="media-preview">
				{course.video_preview ? (
					<video width="100%" height="auto" controls className="video">
						<source src={course.video_preview} type="video/mp4" />
						Video ochilmadi
					</video>
				) : (
					<img src={course.image} alt={course.title} className="course-img" />
				)}
			</div>
			<p>
						<b><a target='_blank' href={course.youtube}>Video YouTube</a></b>
					</p>

			<div className="course-content">
				<h2>{course.title}</h2>
				<p className="subtitle">{course.subtitle}</p>

				<div className="course-info">
					<p><strong>Kategoriya:</strong> {course.category}</p>
					<p><strong>Reyting:</strong> ⭐ {course.rating}</p>
					<p><strong>Davomiylik:</strong> ⏱ {course.duration}</p>
					<p><strong>O‘quvchilar soni:</strong> 👨‍🎓 {course.students}+</p>
					<p><strong>Videolar:</strong> 🎬 {course.videos} ta</p>
					
				</div>

				<div className="course-sections">
					{/* <h3>Bo‘limlar</h3> */}
					<br />
					<br />
					{course.sections.map((section, index) => (
						<div key={index} className="section">
							<h4><b>{section.title}</b></h4>
							<p>{section.content}</p>
						</div>
					))}
				</div>
			</div>
		</div>
		</>
	);
};

export default CourseDetails;
