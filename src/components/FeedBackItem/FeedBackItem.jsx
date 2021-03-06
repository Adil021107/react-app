import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from '../../Shared/Card'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import FeedbackContext from '../../context/FeedbackContext'

const FeedBackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes />
			</button>
			<button className='edit' onClick={() => editFeedback(item)}>
				<FaEdit color='purple' />
			</button>
			<Link to={`/post/:${item.rating}/:${item.text}`}>
				<div className='text-display'>{item.text}</div>
			</Link>
		</Card>
	)
}

export default FeedBackItem
