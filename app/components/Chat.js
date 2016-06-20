var React = require('react');
var PropTypes = React.PropTypes;
var Message = require('./Message');
var connect = require('react-redux').connect;

var Chat = React.createClass({

	handleMessage: function(event){
		event.preventDefault();
		var form = event.target;
		var message = form.querySelector('[name = message]').value;
		var username = this.props.username;
		this.props.sendMessage(message, username);
	}

	render: function() {
		var exchangedMessages = [];
		this.props.messages.map(function(message){ //revise redux to get state and exchange state and extract data from it.
			exchangedMessages.push(
				<li><Message sender={message.sender} text={message.text} time={message.time} /></li>
				)
		});

		return (
			<div>
				<header style={{textAlign: 'center'}}> 
					<img src={this.props.imgURL} />
					<h1>{this.props.contactName}</h1>
				</header>

				<div>
					<ul>
						{exchangedMessages}
					</ul>
				</div>

				<footer>
					<form onSubmit={handleMessage}>
						<input type='text' name="message"/>
						<button type="submit">Send</button>
					</form>
				</footer>

			</div>
		);
	}
})

Chat.propTypes = {
	messages 	: PropTypes.array.isRequired,
	username 	: PropTypes.string.isRequired,
	sendMessage : PropTypes.func.isRequired,
	imgURL 		: PropTypes.string.isRequired,
	contactName : PropTypes.string.isRequired
}



module.exports = Chat;