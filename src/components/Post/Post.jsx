import { Link, useParams } from 'react-router-dom'
import Card from '../../Shared/Card'
import { FaTimes } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'

const Post = ({ item }) => {
	const { deleteFeedback } = useContext(FeedbackContext)
	const params = useParams()

	return (
		<Card>
			<Link to={'/'}>
				<button className='close' onClick={() => deleteFeedback(params.id)}>
					<FaTimes />
				</button>
			</Link>
			<h1>Post id {params.id}</h1>
			<p>Post text {params.name}</p>
			<Link to={'/'}>Back Home</Link>
		</Card>
	)
}

export default Post
