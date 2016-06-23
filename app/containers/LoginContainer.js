import React 		from'react';
import {Router} from'react-router';
import Login 		from'../components/Login';
import {connect} 	from'react-redux';

var mapDispatchToProps = function(dispatch, ownProps){
	return {}
}

var LoginContainer = connect(null,mapDispatchToProps)(Login);


module.exports = LoginContainer;