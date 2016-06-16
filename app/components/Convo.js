var React = require('react');
var PropTypes = React.PropTypes;

function Convo(props){
	return(
		<div className="myChat">
			{/*image goes here*/}
			<span>{props.username}</span>
		</div>
	)
}

Convo.propTypes = {
	username : PropTypes.string.isRequired,
	imgURL: PropTypes.string.isRequired
}

module.exports = Convo;