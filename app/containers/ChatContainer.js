import React 		from 'react';
import {connect} 	from 'react-redux';
import Chat 		from '../components/Chat';
import {sendMessage} from '../config/actionCreators/actions';


const mapStateToProps = function(store){
	return {
		messages: store.messages,
		username: store.login.username
	}
}

const mapDispatchToProps = function(dispatch, ownProps){
	return{
		send: function(message, sender){
			dispatch(sendMessage(message, sender));
		}
	}
}



export default connect(mapStateToProps,mapDispatchToProps)(Chat);