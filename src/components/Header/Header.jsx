import PropType from 'prop-types'
import { Link } from 'react-router-dom'

//
const Header = ({ text, bgColor, textColor }) => {
	console.log(text)
	const headerStyle = {
		background: bgColor,
		color: textColor,
	}
	return (
		<header style={headerStyle}>
			<div className='container'>
				<Link style={{ color: textColor }} to='/'>
					<h2>{text}</h2>
				</Link>
				{/* Используем две скобки ::: Первая скобка JS / Вторая CSS */}
			</div>
		</header>
	)
}
// DefaultProps выполняется когда ничего нету в /props по дефолту
Header.defaultProps = {
	text: 'Feedback UI App',
	bgColor: 'rgba(0, 0, 0, 0.4)',
	textColor: '#ff6a95',
}

// PropType чтобы фиксировать данные ... типизация и еще || чтобы код был удобнее для след
Header.PropType = {
	text: PropType.string,
	bgColor: PropType.string,
	textColor: PropType.string,
}

export default Header
