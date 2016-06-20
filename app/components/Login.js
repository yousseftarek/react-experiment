var React 		= require('react');
var PropTypes 	= React.PropTypes;
var ReactRouter = require('react-router');
var Link 		= ReactRouter.Link;

var Login = React.createClass({

	onSubmitData: function(event){
		event.preventDefault();
		var form = event.target;
    	var username = form.querySelector('[name=username]').value;
    	var password = form.querySelector('[name=password]').value;
    	console.log("username: " + username + " password: " + password);
    	if(username === 'lolo' && password === 'lolo'){
    	this.context.router.push({
    		pathname: '/app',
    		username: username
    	});
    }
    else{
    	this.context.router.push('');
    }
	},

	render: function(){
		return(
		<div>
			<h1> Welcome To Messenger </h1>
			<form onSubmit={onSubmitData}>
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
Login.propTypes = {
	onSubmitData	: PropTypes.func.isRequired
}

module.exports = Login;