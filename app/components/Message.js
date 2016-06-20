var React = require('react');
var PropTypes = React.PropTypes;

function Message(props){
	return (
		<div >
			<h3>{props.sender}</h3>
			<p>{props.text}</p>
			<span>{props.time}</span>
		</div>
	)
}

Message.propTypes = {
	sender	: PropTypes.string.isRequired,
	time	: PropTypes.object.isRequired,
	text	: PropTypes.string.isRequired
}

module.exports = Message;
