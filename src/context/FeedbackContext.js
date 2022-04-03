import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([])


	useEffect(() => {
		fetchFeedback()
	}, [])

	//Fetch
	const fetchFeedback = async () => {
		const response = await fetch(
			'https://624703fa739ac8459195eee7.mockapi.io/feedback'
			)
			const data = await response.json()
			setFeedback(data)
			
	}

	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})
	const [updateFeedback, setUpdateFeedback] = useState({
		update: false,
	})

	//Add feedback
	const addFeedback = async newFeedback => {
		const response = await fetch(
				'https://624703fa739ac8459195eee7.mockapi.io/feedback', {
					method: 'POST',
					headers: {
						'Content-Type':'application/json'
					},
					body: JSON.stringify(newFeedback),
				}
		)
		const data = await response.json()
		setFeedback([data, ...feedback])
	}
	//DeleteFeedback
	const deleteFeedback = async id => {
		if (window.confirm('Are you sure?'))
		await fetch(`https://624703fa739ac8459195eee7.mockapi.io/feedback${id}`, {method: 'DELETE'})
			setFeedback(feedback.filter(el => el.id !== id))
	}
	//EditFeedback
	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		})
		console.log(feedbackEdit)
	}

	//Uptade Feedback

	const uptadeFeedback = async (id, updItem) => {
		const response = await fetch(`https://624703fa739ac8459195eee7.mockapi.io/feedback${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'aplication/json',
			},
			body: JSON.stringify(updItem),
		})
		const data = await response.json()
		setFeedback(feedback.map(item => (item.id === id ? {...item, ...data} : item))
		)
	}

	const updateEditFeedback = id => {
		setUpdateFeedback({
			update: true,
		})
		if (updateFeedback.update === true) {
			updateFeedback.map(el => el => el.id !== id)
		}
	}
	return (
		<FeedbackContext.Provider
			value={{
				feedback: feedback,
				addFeedback,
				deleteFeedback,
				editFeedback,
				feedbackEdit,
				updateEditFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
