var React 		= require('react');
var PropTypes 	= React.PropTypes;


function SignUp(props){
	return(
		<div className=" jumbotron col-sm-6 col-sm-offset-3 text-center">
			<h1> Sign Up </h1>
			<form onSubmit={props.onSubmitData}>
				<div className="form-group">
					<input className="form-control" placeholder="Username" type="text" name="username"/>
				</div>

				<div className="form-group">
					<input className="form-control" placeholder="Password" name="password" type="password"/> {/*value={props.username}*/}
				</div>

				<div className="form-group col-sm-4 col-sm-offset-4">
					<button className="btn btn-block btn-success" type="submit"> Submit </button>
				</div>
			</form>
		</div>
		)
}

SignUp.propTypes = {
	onSubmitData 		: PropTypes.func.isRequired
}

module.exports = SignUp;