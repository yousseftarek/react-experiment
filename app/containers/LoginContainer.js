var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Login = require('../components/Login')

var LoginContainer = React.createClass({

	getInitialState: function(){
		return{
			username: ''
		}
	},
	handleUpdateUser: function(event){
		this.setState({
			username: event.target.value
		})
	},
	handlePassword: function(){
		//should handle password
	},
	handleSubmitUser: function(){
		//handle checking username
	},
	render: function(){
		return(

			<div>
				<Login onUpdateUser={this.handleUpdateUser} submitPassword={this.handlePassword} username={this.state.username} onSubmitUser={this.handleSubmitUser}/>
			</div>
			)
	}
})

module.exports = LoginContainer;