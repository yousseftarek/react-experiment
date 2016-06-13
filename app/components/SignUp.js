var react 		= require('react');
var PropTypes 	= React.PropTypes;


function SignUp(props){
	return(
		<div>
			<h1> Sign Up </h1>
			<form onSubmit={props.onSubmitNewUser, props.submitPassword}>
				<div className="form-group">
					<input className="form-control" placeholder="Username" type="text" onChange={props.onUpdateUser} value={props.username}/>
				</div>

				<div className="form-group">
					<input className="form-control" placeholder="Password" type="password"{/*value={props.username}*/}/>
				</div>

				<div className="form-group col-sm-4 col-sm-offset-4">
					<button className="btn btn-block btn-success" type="submit"> Submit </button>
				</div>
			</form>
		</div>
		)
}

SignUp.propTypes = {
	username 		: PropTypes.string.isRequired,
	onSubmitUser 	: PropTypes.func.isRequired,
	onUpdateUser 	: PropTypes.func.isRequired,
	submitPassword 	: PropTypes.func.isRequired
}

module.exports = SignUp;