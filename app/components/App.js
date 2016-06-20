var React = require('react');
var ReactRouter = require('react-router');
var store = require('../config/store');
var connect = require('react-redux').connect;
var ChatContainer = require('../containers/ChatContainer');
var FriendsContainer = require('./containers/FriendsContainer');

var App = React.createClass({
	contextTypes:{
		router: React.PropTypes.object.isRequired
	},
	render: function(){
		return (

			<div className="col-md-4">
				<FriendsContainer friends={this.props.friends}/>
			</div>

			<div className="col-md-8">
				<ChatContainer messages={this.props.messages}/>
			</div>

		)
	}
})

const mapStateToProps = function(store){
	return {
		messages: store.messages.messages,
		friends: store.friends.friends
	}
}



/*will call convos and actual chat component*/
module.exports = connect(mapStateToProps)(App);