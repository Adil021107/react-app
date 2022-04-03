import PropTypes from 'prop-types'
// children это - то что мы вписываем внутрь чего либо
const Card = ({ children, reverse }) => {
	return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = {
	reverse: false,
}

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
}

export default Card
