var React 		= require('react');
var ReactRouter = require('react-router');
var Link 		= ReactRouter.Link;
var Login 		= require('../components/Login');
var connect 	= require('react-redux').connect;

var mapDispatchToProps = function(dispatch, ownProps){
	return {
		loginUser : function(username){
			dispatch({
				type: 'LOGIN_USER',
				username: username
			})
		}
	}
}

var LoginContainer = connect(mapDispatchToProps)(Login);

/*var LoginContainer = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	handleUpdateUser: function(event){
		/*this.setState({
			username: event.target.value
		})
	},
	handleUpdatePassword: function(event){
		//should handle password
	},
	handleSubmitUser: function(){
		//handle checking username
	},
	handleSubmitData : function(event){
	event.preventDefault();

    
	},
	render: function(){
		
		return(

			<div>
				<Login onSubmitData={this.handleSubmitData}/>
			</div>
			)
	}
})
*/
module.exports = LoginContainer;