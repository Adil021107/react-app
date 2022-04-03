import { useContext, useEffect, useState } from 'react'
import Button from '../../Shared/Button'
import Input from '../../Shared/Input'
import Card from '../../Shared/Card'
import RatingSelect from '../RatingSelect/RatingSelect'
import { Link } from 'react-router-dom'
import FeedbackContext from '../../context/FeedbackContext'

const FeedbackForm = () => {
	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext)

	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [message, setMessage] = useState('')
	const [rating, setRating] = useState(10)

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setBtnDisabled(false)
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
		}
	}, [feedbackEdit])

	const handleTextChange = e => {
		if (text === '') {
			setBtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must be at least 10 characters')
			setBtnDisabled(true)
		} /* trim убирает пробелы */ else {
			setMessage(null)
			setBtnDisabled(false)
		}
		setText(e.target.value)
	}

const handleSubmit = e => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText('')
    }
  }
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us ?</h2>
				<RatingSelect select={rating => setRating(rating)} />
				<div className='input-group'>
					<input
						placeholder='Your comment here'
						onChange={handleTextChange}
						value={text}
						type='text'
					/>
					<Button type='submit' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
			<Link to='/about'>About Us</Link>
		</Card>
	)
}

export default FeedbackForm
