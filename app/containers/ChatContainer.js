var React 		= require('react');
var PropTypes 	= React.PropTypes;
var connect 	= require('react-redux').connect;
var Chat 		= require('../components/Chat');

/*var ChatContainer = React.createClass({
	render: function(){
		return (
			<Chat />
		)
	}
})*/

const mapDispatchToProps = function(dispatch, ownProps){
	return{
		sendMessage: function(message, sender){
			dispatch({
				type: 'SEND_MESSAGE',
				text: message,
				sender: sender,
				date: Date.now()
			})
		},
		messages: ownProps.messages
	}
}

var ChatContainer = connect(mapDispatchToProps)(Chat);

module.exports = ChatContainer;