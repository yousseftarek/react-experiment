import React from 'react';
import {Router} from 'react-router';
import SignUp from '../components/SignUp';

var SignUpContainer = React.createClass({
	
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	/*getInitialState: function(){
		return{
			username: ''
		}
	},*/
	handleSubmitData: function(event){
		event.preventDefault();
		var form = event.target;
		var username = form.querySelector('[name=username]').value;
		var password = form.querySelector('[name=password]').value;

		if(username === 'lolo' && password === 'lolo'){
			this.context.router.push('/login');
		}
	},
	render : function(){
		return (
			<SignUp onSubmitData={this.handleSubmitData}/>
			)
	}
})


export default SignUpContainer;