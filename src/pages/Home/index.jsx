import React, { useState, useRef } from 'react'

import styles from './Home.module.scss'
import Post from '../../components/Post'

const Home = () => {
	const [currentPage, setCurrentPage] = useState(1)

	const postsPerPage = 1 // You can change this
	const totalPosts = 10 // Total number of posts
	const totalPages = Math.ceil(totalPosts / postsPerPage)

	// Function to handle page changes
	const handlePageChange = pageNumber => {
		setCurrentPage(pageNumber)
	}

	// Get the index of the first and last post on the current page
	const indexOfLastPost = currentPage * postsPerPage
	const indexOfFirstPost = indexOfLastPost - postsPerPage

	// Create an array with the post for the current page
	const currentPosts = [...new Array(totalPosts)]
		.map((_, i) => i + 1)
		.slice(indexOfFirstPost, indexOfLastPost)

	// Generate pagination numbers (1 2 3 ... 10)
	const pageNumbers = []
	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i)
	}

	if (totalPosts === 0) {
		return <p>Нет постов</p>
	}

	// const [animationParent] = useAutoAnimate()

	return (
		<div className={styles.root}>
			{currentPosts.map(postNumber => (
				<Post
					key={postNumber - 1}
					imgUrl={`/images/posts/0${postNumber}.jpg`}
					descr={`post0${postNumber}`}
				/>
			))}

			<div className={styles.pagination}>
				<button
					onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					&lt;
				</button>

				{pageNumbers.map(number => (
					<button
						key={number}
						onClick={() => handlePageChange(number)}
						className={currentPage === number ? styles.active : ''}
					>
						{number}
					</button>
				))}

				<button
					onClick={() =>
						currentPage < totalPages && handlePageChange(currentPage + 1)
					}
					disabled={currentPage === totalPages}
				>
					&gt;
				</button>
			</div>
		</div>
	)
}

export default Home
