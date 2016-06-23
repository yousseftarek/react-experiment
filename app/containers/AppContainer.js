import React 				from 'react';
import store 				from '../config/store/store';
import {connect} 			from 'react-redux';
import App 					from '../components/App';
import actions				from '../config/actionCreators/actions'


const mapStateToProps = function(store){
	return {
		messages: store.messages,
		friends: store.friends,
		username: store.login.username
	}
}


const mapDispatchToProps = function(dispatch, ownProps){
	return {
		
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);