var React = require('react');
var ReactRouter = require('react-router');
var SignUp = require('../components/SignUp');

var SignUpContainer = React.createClass({
	
	contextTypes: {
		router: React.ProtoTypes.object.isRequired
	},
	getInitialState: function(){
		return{
			username: ''
		}
	},
	handleSubmitUser: function(){
		//check if the username already exists and if not add to database
	},
	handlePassword: function(){
		//initialize password
	},
	render : function(){
		return (
			<SignUp username={this.state.username} onSubmitUser={this.handleSubmitUser} submitPassword={this.handlePassword}/>
			)
	}
})


module.exports = SignUpContainer;
