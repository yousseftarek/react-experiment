var React = require('react');
var PropTypes = React.PropTypes;

function Login(props){
	return(
		<div>
			<form onSubmit={props.onSubmitUser, props.submitPassword}>
				<div className="form-group">
					<input className="form-control" placeholder="Username" type="text" onChange={props.onUpdateUser} value={props.username}/>
				</div>

				<div className="form-group">
					<input className="form-control" placeholder="Password" type="password"/*value={props.username}*//>
				</div>

				<div className="form-group col-sm-4 col-sm-offset-4">
					<button className="btn btn-block btn-success" type="submit"> Login </button>
				</div>
			</form>
		</div>
		)
}

Login.propTypes = {
	username : PropTypes.string.isRequired,
	onSubmitUser : PropTypes.func.isRequired,
	onUpdateUser : PropTypes.func.isRequired,
	submitPassword : PropTypes.func.isRequired
}

module.exports = Login;	