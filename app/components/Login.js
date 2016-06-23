import React 			from 'react';
import {Router, Link} 		from 'react-router';
import {push} 			from 'react-router-redux';
import {loginUser} 		from '../config/actionCreators/actions';
import {loadFriends} 	from '../config/actionCreators/actions';

var PropTypes 	= React.PropTypes;
/*var Link 		= Router.Link;*/


var Login 		= React.createClass({

	contextTypes: {
		store: React.PropTypes.object
	},

	onSubmitData: function(event){
		event.preventDefault();
		var form = event.target;
    	var username = form.querySelector('[name=username]').value;
    	var password = form.querySelector('[name=password]').value;
    	let store = this.context.store;
    	console.log("username: " + username + " password: " + password);
    	if(username === 'lolo' && password === 'lolo'){ //checking the DB happens here

    		store.dispatch(loginUser(username));
			store.dispatch(loadFriends([{username: 'myassin'}]));

    		store.dispatch(push('/app'));
    }
    else{
    	store.dispatch(push(''));
    }
	},

	render: function(){
		return (
		<div>
			<h1> Welcome To Messenger </h1>
			<form onSubmit={this.onSubmitData}>
				<div className="form-group">
					<input name="username" className="form-control" placeholder="Username" type="text" />
				</div>

				<div className="form-group">
					<input name="password" className="form-control" placeholder="Password" type="password" />
				</div>

				<div className="form-group col-sm-4 col-sm-offset-4">
					<button className="btn btn-block btn-success" type="submit"> Login </button>
				</div>
			</form>
			<Link to="/signup">
				<p>Not A Member</p>
			</Link>
		</div>
		)
	}
}
)
/*Login.propTypes = {
	onSubmitData	: PropTypes.func.isRequired
}*/

export default Login;