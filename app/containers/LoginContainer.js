var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Login = require('../components/Login')

var LoginContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function(){
		return{
			username: ''
		}
	},
	handleUpdateUser: function(event){
		/*this.setState({
			username: event.target.value
		})*/
	},
	handleUpdatePassword: function(event){
		//should handle password
	},
	handleSubmitUser: function(){
		//handle checking username
	},
	handleSubmitData : function(event){
	event.preventDefault();

    var form = event.target;
    var username = form.querySelector('[name=username]').value;
    var password = form.querySelector('[name=password]').value;
    console.log("username: " + username + " password: " + password);
    if(username === 'lolo' && password === 'lolo'){
    	this.context.router.push('/app');
    }
	},
	render: function(){
		
		return(

			<div>
				<Login onSubmitData={this.handleSubmitData}/>
			</div>
			)
	}
})

module.exports = LoginContainer;