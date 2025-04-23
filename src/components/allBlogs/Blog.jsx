import React from 'react'
import './Blog.scss'
import { Link } from 'react-router-dom'

const Blog = () => {
	return (
		<div className='container blog_container wave-container'>
			<button className='blog_btn'>
				<Link to='/courses'>Bizda yangi kurslar mavjud!!!</Link>
			</button>
		</div>
	)
}

export default Blog
